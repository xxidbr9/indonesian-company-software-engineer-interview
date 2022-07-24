import moment = require('moment');

type DayOfTheWeek = "sun" | "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | 'tues' | 'weds' | 'thurs';
type DayOfTheWeekMap<T> = { [day in DayOfTheWeek]: T };


type DayToDay = {
  day: number,
  closeTime: string,
  openTime: string
}

const DAYS: DayOfTheWeekMap<number> = {
  mon: 0,
  tue: 1,
  wed: 2,
  thu: 3,
  fri: 4,
  sat: 5,
  sun: 6,
  // plurals
  tues: 1,
  weds: 2,
  thurs: 3,
};

export const DAY_STORE_FORMAT = "HHmm"

export const range = (start: number, stop: number) => {
  if (start < stop) {
    return Array.from({ length: stop - start + 1 }, (_, i) => start + i);
  }
  const mod = (total: number) => total % 7;
  const length = mod(stop + 7 - start) + 1;
  return Array.from({ length }, (_, i) => mod(start + i));
};

export const findDay = (day: DayOfTheWeek | string) => {
  const dayKey = day.toLowerCase() as DayOfTheWeek;
  if (DAYS[dayKey] >= 0 && !!dayKey) return DAYS[dayKey];
  return null;
};

export const calculateDayRange = (listDay: string[]) => {
  const numberDayList = listDay.map(d => findDay(d as DayOfTheWeek));
  return range(numberDayList[0] as number, numberDayList[1] as number);
};

const toNumericTime = (time: string | Date) => moment(time, "h:mm A").format(DAY_STORE_FORMAT);

export function checkIsNumeric(str: string): boolean {
  return !isNaN(parseFloat(str[0]));
}

const parseDay = (token: string) => {
  const dayToken = token.split(" ");
  const days: DayToDay[] = [];
  let dayList: number[] = [];
  let openTimes: Pick<DayToDay, "openTime">[] = [];
  let closeTimes: Pick<DayToDay, "closeTime">[] = [];

  // Boolean
  let isTime = false;
  let isGapDay = false;
  let isDayStep = false;
  let isNextDay = false;

  const initDayNow = {
    day: null,
    openTime: "",
    closeTime: ""
  };

  dayToken.forEach((item, index) => {
    if (!isDayStep) {
      const theDay = findDay(item as DayOfTheWeek);
      if (theDay !== null && theDay >= 0) {
        dayList.push(theDay);
        isGapDay = false;
      }
    }

    const reCommaSeparate = /\,/g;
    const isDayWithGap = reCommaSeparate.test(item);
    if (isDayWithGap) {
      isGapDay = true;
      item = item.slice(0, -1);
      const theDay = findDay(item as DayOfTheWeek);
      if (theDay !== null && theDay >= 0) {
        dayList.push(theDay);
      }
    }

    if (checkIsNumeric(item)) {
      dayList.forEach(e => {
        const dayStepNow = Object.create(initDayNow);
        dayStepNow.day = e;
        const time = toNumericTime(item + dayToken[index + 1]);

        if (!isTime) {
          dayStepNow.openTime = time;
          openTimes.push(dayStepNow);
        } else {
          dayStepNow.closeTime = time;
          closeTimes.push(dayStepNow);
        }
      });

      isTime = !isTime;
    }

    const reDayToDay = /\w*\-\w/gi;
    const isDayToDay = reDayToDay.test(item);
    if (isDayToDay) {
      const dayToDay = item.split("-");
      dayList = calculateDayRange(dayToDay);
      isDayStep = true;
    }

    if (!isTime && item === "-") {
      const dayToDay = [dayToken[index - 1], dayToken[index + 1]];
      dayList = calculateDayRange(dayToDay);
      isDayStep = false;
    }

    const reNextDay = /\//g;
    isNextDay = reNextDay.test(item);
    if (isNextDay) {
      // clear and create new logic
      isTime = false;
      isGapDay = false;
      isDayStep = false;
      isNextDay = false;
      dayList = [];
    }
  });

  openTimes.forEach((_, i) => {
    days.push({ ...openTimes[i], ...closeTimes[i] } as DayToDay);
  });

  // for filter day
  const seen = {};
  return days.filter((item) => {
    return seen.hasOwnProperty(item.day) ? false : (seen[item.day] = true);
  });
};

export default parseDay
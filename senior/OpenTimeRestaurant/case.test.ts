import parser from "./";
import { checkIsNumeric, findDay, range, calculateDayRange, DAY_STORE_FORMAT } from "./";
import moment = require('moment');

const parseTo12Hour = (time: string) => moment(time, DAY_STORE_FORMAT).format("hh:mm A")

const TEST_CASE_1 = "Mon-Sun 11 am - 10:30 pm";
const EXPECTED_TEST_1 = [
  { day: 0, openTime: '11:00 AM', closeTime: '10:30 PM' },
  { day: 1, openTime: '11:00 AM', closeTime: '10:30 PM' },
  { day: 2, openTime: '11:00 AM', closeTime: '10:30 PM' },
  { day: 3, openTime: '11:00 AM', closeTime: '10:30 PM' },
  { day: 4, openTime: '11:00 AM', closeTime: '10:30 PM' },
  { day: 5, openTime: '11:00 AM', closeTime: '10:30 PM' },
  { day: 6, openTime: '11:00 AM', closeTime: '10:30 PM' }
]

// case 2
const TEST_CASE_2 = "Mon - Sun 11 am - 10:30 pm";
const EXPECTED_TEST_2 = [
  { day: 0, openTime: '11:00 AM', closeTime: '10:30 PM' },
  { day: 1, openTime: '11:00 AM', closeTime: '10:30 PM' },
  { day: 2, openTime: '11:00 AM', closeTime: '10:30 PM' },
  { day: 3, openTime: '11:00 AM', closeTime: '10:30 PM' },
  { day: 4, openTime: '11:00 AM', closeTime: '10:30 PM' },
  { day: 5, openTime: '11:00 AM', closeTime: '10:30 PM' },
  { day: 6, openTime: '11:00 AM', closeTime: '10:30 PM' },
  { day: 6, openTime: '11:00 AM', closeTime: '10:30 PM' }
]

const TEST_CASE_3 = "Sun = Mon 11 am - 10:30 pm";
const EXPECTED_TEST_3 = [
  { day: 6, openTime: '11:00 AM', closeTime: '10:30 PM' },
  { day: 0, openTime: '11:00 AM', closeTime: '10:30 PM' }
]

const TEST_CASE_4 = "Mon, Sat, Sun 11 am - 10:30 pm";
const EXPECTED_TEST_4 = [
  { day: 0, openTime: '11:00 AM', closeTime: '10:30 PM' },
  { day: 5, openTime: '11:00 AM', closeTime: '10:30 PM' },
  { day: 6, openTime: '11:00 AM', closeTime: '10:30 PM' }
]

const TEST_CASE_5 =
  "Mon, Weds 5:30 am - 3:30 am / Tues 1:30 pm - 4 pm / Thurs 3 pm - 12:15 pm / Fri 1 pm - 2 pm / Sat 7:45 am - 12 pm / Sun 11:15 am - 7:45 pm";
const EXPECTED_TEST_5 = [
  { day: 0, openTime: '05:30 AM', closeTime: '03:30 AM' },
  { day: 2, openTime: '05:30 AM', closeTime: '03:30 AM' },
  { day: 1, openTime: '01:30 PM', closeTime: '04:00 PM' },
  { day: 3, openTime: '03:00 PM', closeTime: '12:15 PM' },
  { day: 4, openTime: '01:00 PM', closeTime: '02:00 PM' },
  { day: 5, openTime: '07:45 AM', closeTime: '12:00 PM' },
  { day: 6, openTime: '11:15 AM', closeTime: '07:45 PM' }
]


const TEST_CASE_6 = "Mon-Thu, Sun 11:30 am - 9 pm  / Fri-Sat 11:30 am - 9:30 pm"
const EXPECTED_TEST_6 = [
  { day: 0, openTime: '11:30 AM', closeTime: '09:00 PM' },
  { day: 1, openTime: '11:30 AM', closeTime: '09:00 PM' },
  { day: 2, openTime: '11:30 AM', closeTime: '09:00 PM' },
  { day: 3, openTime: '11:30 AM', closeTime: '09:00 PM' },
  { day: 4, openTime: '11:30 AM', closeTime: '09:30 PM' },
  { day: 5, openTime: '11:30 AM', closeTime: '09:30 PM' }
]

// Begin Testing
describe("Transform string (TIME) to object", () => {
  test("Detect can be use in range", () => {
    const result = parser(TEST_CASE_1);
    const finalResult = result.map((time) => ({ ...time, closeTime: parseTo12Hour(time.closeTime), openTime: parseTo12Hour(time.openTime) }))
    expect(finalResult).toEqual(EXPECTED_TEST_1);
  });

  test("Detect can be use in range (using space in gap)", () => {
    const result = parser(TEST_CASE_2);
    const finalResult = result.map((time) => ({ ...time, closeTime: parseTo12Hour(time.closeTime), openTime: parseTo12Hour(time.openTime) }))

    expect(finalResult).toEqual(EXPECTED_TEST_2);
  });

  test("Detect can be use in range (Weekend first)", () => {
    const result = parser(TEST_CASE_3);
    const finalResult = result.map((time) => ({ ...time, closeTime: parseTo12Hour(time.closeTime), openTime: parseTo12Hour(time.openTime) }))

    expect(finalResult).toEqual(EXPECTED_TEST_3);
  });

  test("Detect can be on selected day", () => {
    const result = parser(TEST_CASE_4);
    const finalResult = result.map((time) => ({ ...time, closeTime: parseTo12Hour(time.closeTime), openTime: parseTo12Hour(time.openTime) }))

    expect(finalResult).toEqual(EXPECTED_TEST_4);
  });

  test("Detect can be on complex day", () => {
    const result = parser(TEST_CASE_5);
    const finalResult = result.map((time) => ({ ...time, closeTime: parseTo12Hour(time.closeTime), openTime: parseTo12Hour(time.openTime) }))

    expect(finalResult).toEqual(EXPECTED_TEST_5);
  });

  test("Double Gap day", () => {
    const result = parser(TEST_CASE_6)
    const finalResult = result.map((time) => ({ ...time, closeTime: parseTo12Hour(time.closeTime), openTime: parseTo12Hour(time.openTime) }))

    expect(finalResult).toEqual(EXPECTED_TEST_6)
  })
});

describe("Testing for Helpers", () => {
  test("Check the string are number", () => {
    expect(checkIsNumeric("2")).toBeTruthy();
  });

  test("find day as number", () => {
    const day = findDay("mon");
    expect(day).toBe(0);
  });

  test("find days as number", () => {
    const day = findDay("thurs");
    expect(day).toBe(3);
  });

  test("check if null", () => {
    const day = findDay("");
    expect(day).toBe(null);
  });

  test("check all day", () => {
    const t = ["sun", "mon", "tue", "wed", "thu", "fri", "sat", 'tues', 'weds', 'thurs']
    const b = t.map(e => findDay(e))
    expect(b.length).toBe(t.length)
  })

  test("check is the first are smaller", () => {
    const arr = [1, 2];
    expect(range(arr[0], arr[1])).toEqual(arr);
  });

  test("check is the first are bigger", () => {
    const arr = [6, 0];
    expect(range(arr[0], arr[1])).toEqual(arr);
  });

  test("check is converted date to number", () => {
    const arr = ["sun", "mon"];
    expect(calculateDayRange(arr)).toEqual([6, 0]);
  });



});
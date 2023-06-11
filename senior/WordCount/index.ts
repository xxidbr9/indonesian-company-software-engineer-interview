export const factory = (text: string = "", total: number, find: string): number => {
  const textLength: number = text.length;
  const re: RegExp = new RegExp(find, "gmi");
  const findOccurrences: RegExpMatchArray | null = text.match(re);

  const remaining: number = total % textLength;
  const nearestTotal: number = total - remaining;

  let count: number = (nearestTotal / textLength) * (findOccurrences ? findOccurrences.length : 0);

  count += text.substring(0, remaining).match(re)?.length ?? 0;

  return count;
};

// console.log(factory("BLBLII", 100, "B"));

const toBinary = (str: string): number => {
  const arrBinary: number[] = []

  const arrStr = str.split("")
  for (let i in arrStr) {
    const binary = str[i].charCodeAt(0).toString(2) + " ";
    arrBinary.push(parseInt(binary, 2))
  }

  let result = 0
  for (let v of arrBinary) {
    result += v
  }
  return result
}

export const anagrams = (arrStr: string[]) => {
  const result = {};
  for (let word of arrStr) {
    const valWord = toBinary(word)
    if (result[valWord]) {
      result[valWord].push(word);
    } else {
      result[valWord] = [word];
    }
  }
  return Object.values(result);
}

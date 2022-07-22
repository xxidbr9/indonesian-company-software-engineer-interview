import { anagrams } from "."

const TEST_CASE = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']

const EXPECTED_RESULT = [
  ['kita', 'atik', 'tika'],
  ['aku', 'kua'],
  ['makan'],
  ['kia'],
]

describe("Test index.ts file", () => {
  test("Check if the function return the same output", () => {
    const result = anagrams(TEST_CASE)
    expect(result).toMatchObject(expect.arrayContaining(EXPECTED_RESULT))
  })
})
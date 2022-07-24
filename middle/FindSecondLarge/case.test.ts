
import { getSecondLargest } from '.'

const TEST_CASE = [6, 2, 5, 24, 1, 7, 13, 8, 21]
const EXPECTED_RESULT = 21

describe('Test index.ts file', () => {
  test('Check if the function return the same output', () => {
    const result = getSecondLargest(TEST_CASE)
    expect(result).toBe(EXPECTED_RESULT)
  });
});
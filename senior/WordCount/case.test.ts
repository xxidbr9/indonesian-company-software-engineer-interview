import { factory } from './index';

describe('factory', () => {
  test('should count the occurrences of "B" in the repeated word', () => {
    const result = factory("BLIBLI", 14, "B");
    expect(result).toBe(5);
  });

  test('should handle an empty text string', () => {
    const result = factory("B", 10, "A");
    expect(result).toBe(0);
  });

  test('should handle a zero total', () => {
    const result = factory("BLIBLI", 0, "B");
    expect(result).toBe(0);
  });

  test('should handle a total that is smaller than the text length', () => {
    const result = factory("BLIBLI", 4, "B");
    expect(result).toBe(2);
  });

  test('should handle a case-insensitive search', () => {
    const result = factory("BLIBLIBLI", 9, "b");
    expect(result).toBe(3);
  });
});

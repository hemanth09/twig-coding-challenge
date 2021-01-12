const groupArrayElements = require('./index');

describe('groupArrayElements tests', () => {
  test('Should define groupArrayElements function', () => {
    expect(typeof groupArrayElements).toBe('function');
  });

  test('It should reject if first argument is not an Array', () => {
    expect(groupArrayElements('123 abc', 1)).toMatch(
      'First argument must be an array and should not be empty.'
    );
  });

  test('Should rejects if array is empty', () => {
    expect(groupArrayElements([], 1)).toMatch(
      'First argument must be an array and should not be empty.'
    );
  });

  test('Should reject if second argument is not a Number', () => {
    expect(groupArrayElements([1, 2, 3], 'abc')).toMatch(
      'Second argument must be a positive number and greater than zero.'
    );
  });

  test('Should reject if it is not a positive number', () => {
    expect(groupArrayElements([1, 2, 3], -1)).toMatch(
      'Second argument must be a positive number and greater than zero.'
    );
  });

  test('Should return all equal sized arrays if "array.length" is divisible by size ', () => {
    expect(groupArrayElements([1, 2, 3, 4, 5, 6], 3)).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
  });

  test('Should return equal sized arrays except last part if "array.length" is not divisible by size ', () => {
    expect(groupArrayElements([1, 2, 3, 4, 5], 3)).toEqual([
      [1, 2],
      [3, 4],
      [5],
    ]);
  });
});

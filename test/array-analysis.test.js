import analyze from '../src/array-analysis';

test('analyze calculates the average, min, max and length of numbers in an array', () => {
  expect(analyze([1, 2, 3]).average).toEqual(2);
  expect(analyze([1, 2, 2]).average).toEqual(1.6666666666666667);
  expect(analyze([1, 2, -3, 0, -1]).min).toEqual(-3);
  expect(analyze([1, 2, 3, 10000000000000]).max).toEqual(10000000000000);
  expect(analyze([1, 2, 3, 0, 9, 11]).length).toBe(6);
});

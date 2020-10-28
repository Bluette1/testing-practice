import reverseString from '../src/reverse-string';

test('reverses a given string', () => {
  expect(reverseString('ewe')).toBe('ewe');
  expect(reverseString('load')).toBe('daol');
});

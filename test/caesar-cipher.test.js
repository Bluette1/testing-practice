import caesar from '../src/caesar-cipher';

test('caesar encrypts a string according to given shift value and respect puntuation', () => {
  const message = 'defend the east wall of the castle';
  const enciphered = 'efgfoe uif fbtu xbmm pg uif dbtumf';
  expect(caesar(message, 1)).toBe(enciphered);
});

test('caesar respect puntuation', () => {
  const message = 'defend the:) east wall, of the castle!';
  const enciphered = 'efgfoe uif:) fbtu xbmm, pg uif dbtumf!';
  expect(caesar(message, 1)).toBe(enciphered);
});

test('caesar wraps the z to a', () => {
  const message = 'xyz';
  const enciphered = 'abc';
  expect(caesar(message, 3)).toBe(enciphered);
});

test('caesar keeps the same case', () => {
  const message = 'ABCD';
  const enciphered = 'EFGH';
  expect(caesar(message, 4)).toBe(enciphered);
});

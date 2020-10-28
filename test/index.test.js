import {
  capitalize, reverseString, calculator, caesar, analyze,
} from '../src/index';

test('capitalizes a given string', () => {
  expect(capitalize('We')).toBe('We');
  expect(capitalize('we')).toBe('We');
});

test('reverses a given string', () => {
  expect(reverseString('ewe')).toBe('ewe');
  expect(reverseString('load')).toBe('daol');
});

test('calculator.add adds two numbers', () => {
  expect(calculator.add(1, 0)).toBe(1);
  expect(calculator.add(1, 2)).toBe(3);
});

test('calculator.subtract subtracts two numbers', () => {
  expect(calculator.subtract(2, 0)).toBe(2);
  expect(calculator.subtract(2, 1)).toBe(1);
});

test('calculator.divide divides two numbers', () => {
  expect(calculator.divide(2, 1)).toBe(2);
  expect(calculator.divide(6, 2)).toBe(3);
});

test('calculator.multiply multiplies two numbers', () => {
  expect(calculator.multiply(2, 1)).toBe(2);
  expect(calculator.multiply(2, 3)).toBe(6);
});

test('caesar encrypts a string according to given shift value', () => {
  const message = 'defend the east wall of the castle';
  const enciphered = 'efgfoe uif fbtu xbmm pg uif dbtumf';
  expect(caesar(message, 1)).toBe(enciphered);
  expect(caesar(message.toUpperCase(), 1)).toBe(enciphered.toUpperCase());

  const messagePunctuated = 'Defend the east wall of the castle!!';
  const encipheredPunctuated = 'Efgfoe uif fbtu xbmm pg uif dbtumf!!';
  expect(caesar(messagePunctuated, 1)).toBe(encipheredPunctuated);
});
test('analyze calculates the average, min, max and length of numbers in an array', () => {
  expect(analyze([1, 2, 3]).average).toBe(2);
  expect(analyze([1, 2, 3]).min).toBe(1);
  expect(analyze([1, 2, 3]).max).toBe(3);
  expect(analyze([1, 2, 3]).length).toBe(3);
});
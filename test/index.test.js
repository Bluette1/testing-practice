import { capitalize, reverseString, calculator } from '../src/index';

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
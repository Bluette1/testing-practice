import calculator from '../src/calculator';

test('calculator.add adds two numbers', () => {
  expect(calculator.add(1, 0)).toEqual(1);
  expect(calculator.add(1, 2)).toEqual(3);
  expect(calculator.add(1, -2)).toEqual(-1);
});
test('calculator.subtract subtracts two numbers', () => {
  expect(calculator.subtract(2, 0)).toEqual(2);
  expect(calculator.subtract(2, 1)).toEqual(1);
  expect(calculator.subtract(2, -1)).toEqual(3);
});

test('calculator.divide divides two numbers', () => {
  expect(calculator.divide(2, 1)).toEqual(2);
  expect(calculator.divide(6, 2)).toEqual(3);
  expect(calculator.divide(5, 2)).toEqual(2.5);
  expect(calculator.divide(22, 7)).toEqual(3.142857142857143);
});

test('calculator.multiply multiplies two numbers', () => {
  expect(calculator.multiply(2, 1)).toEqual(2);
  expect(calculator.multiply(2, 3)).toEqual(6);
  expect(calculator.multiply(2, 0)).toEqual(0);
  expect(calculator.multiply(2, 0.5)).toEqual(1);
});

import { capitalize, reverseString } from '../src/index'
// import { cube, foo, graph } from './my-module.js';

test('capitalizes a given string', () => {
  expect(capitalize('We')).toBe('We');
  expect(capitalize('we')).toBe('We');
});

test('reverses a given string', () => {
  expect(reverseString('ewe')).toBe('ewe');
  expect(reverseString('load')).toBe('daol');
});
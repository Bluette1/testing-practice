import index from '../src/index'

test('capitalizes a given string', () => {
  expect(index.capitalize('we')).toBe('We');
});
import capitalize from '../src/capitalize';

test('capitalizes a given string', () => {
  expect(capitalize('We')).toBe('We');
  expect(capitalize('we')).toBe('We');
  expect(capitalize('WE')).toBe('WE');
});

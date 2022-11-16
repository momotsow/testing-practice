const length = require('./length');

test('length of string', () => {
  expect(length('hellohello')).toBe(10);

});

test('empty string error', () => {
  expect(length('')).toBe('Error');
})

test('more than 10 chars error', () => {
  expect(length('hellohellohello')).toBe('Error');
})
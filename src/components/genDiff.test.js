
test('genDiff returns true if actual matches the beginning of expected', () => {
  const expected = 'hello world';
  const actual = 'hello';
  const result = genDiff(expected, actual);
  expect(result).toBe(true);
});

test('genDiff returns false if actual does not match the beginning of expected', () => {
  const expected = 'hello world';
  const actual = 'hi';
  const result = genDiff(expected, actual);
  expect(result).toBe(false);
});
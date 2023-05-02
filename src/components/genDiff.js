

const genDiff = (expected, actual) => {
  if (!expected || !actual) return true;
  console.log(expected.slice(0, actual.length), actual);
  return expected.slice(0, actual.length) === actual;
}

export default genDiff;
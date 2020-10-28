const caesar = (string, shift) => {
  const lowerCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  const upperCaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let resultString = '';

  for (let i = 0; i < string.length; i += 1) {
    const idxLower = lowerCaseAlphabet.indexOf(string[i]);
    const idxUpper = upperCaseAlphabet.indexOf(string[i]);

    if (idxLower >= 0) {
      const newIdx = (idxLower + shift) % 26;
      resultString += lowerCaseAlphabet.charAt(newIdx);
    } else if (idxUpper >= 0) {
      const newIdx = (idxUpper + shift) % 26;
      resultString += upperCaseAlphabet.charAt(newIdx);
    } else {
      resultString += string[i];
    }
  }
  return resultString;
};

export default caesar;
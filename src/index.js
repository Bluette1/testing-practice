const capitalize = (string) => string.split(' ').map((word) => {
  const splitWord = word.split('');
  splitWord[0] = splitWord[0].toUpperCase();
  return splitWord.join('');
}).join(' ');

const reverseString = (string) => {
  let reversedString = '';
  for (let i = string.length - 1; i >= 0; i -= 1) {
    reversedString += string.charAt(i);
  }
  return reversedString;
};

const calculator = {
  add: (first, sec) => first + sec,

  subtract: (first, sec) => first - sec,

  divide: (first, sec) => first / sec,

  multiply: (first, sec) => first * sec,
};

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

const analyze = (numbers) => {
  const { length } = numbers;
  const sum = numbers.reduce((total, num) => total + num, 0);
  return {
    average: sum / length,
    min: Math.min(...numbers),
    max: Math.max(...numbers),
    length,
  };
};

export {
  capitalize, reverseString, calculator, caesar, analyze,
};

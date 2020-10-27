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

export { capitalize, reverseString, calculator };
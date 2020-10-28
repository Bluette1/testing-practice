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

const encryptor = (range, encrypted) => {
  const max = range.reduce((a, b) => Math.max(a, b));
  const min = range.reduce((a, b) => Math.min(a, b));
  if (encrypted > max) {
    return String.fromCharCode(encrypted);
  }

  encrypted = (encrypted - max) + (min - 1);
  return String.fromCharCode(encrypted);
};

const getRange = (start, end) => {
  if (start === end) return [start];
  return [start, ...getRange(start + 1, end)];
};

const ceasarCipher = (str, key) => {
  const strArr = str.split('');
  const strDigits = [];
  strArr.forEach((curr, index) => {
    console.log(`current index is: ${index} and the char is: ${curr} and the code is: ${curr.charCodeAt(index)}`);
    if (getRange(65, 90).includes(curr.charCodeAt(index))) {
      const encrypted = (curr.charCodeAt(index) + key) % 26;
      strDigits.push(encryptor((getRange(65, 90)), encrypted));
    } else if (getRange(97, 122).includes(curr.charCodeAt(index))) {
      // encrypted = strArr[i].charCodeAt(i) + key % 26
      // strDigits.push(encryptor((getRange(97, 122)), encrypted))
    } else {
      strDigits.push(curr);
    }
  });
  // for (let i = 0; i < strArr.length; i += 1) {

  // }
  return strDigits.join('');
};

// console.log(getRange(65,90));
console.log(ceasarCipher('people', 5));

// export { capitalize, reverseString, calculator };
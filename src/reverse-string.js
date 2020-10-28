const reverseString = (string) => {
  let reversedString = '';
  for (let i = string.length - 1; i >= 0; i -= 1) {
    reversedString += string.charAt(i);
  }
  return reversedString;
};

export default reverseString;

const capitalize = (string) => string.split(' ').map((word) => {
  const splitWord = word.split('');
  splitWord[0] = splitWord[0].toUpperCase();
  return splitWord.join('');
}).join(' ');

export default capitalize;

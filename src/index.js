const capitalize = (string) => {
  const resultString = [];
  string = string.split(' ');
  string.forEach(word => {
    const splitWord = word.split('');
    splitWord[0] = splitWord[0].toUpperCase();
    word = splitWord.join('');
    resultString.push(word);
  });
  return resultString.join(' ');
}

module.exports = { capitalize }
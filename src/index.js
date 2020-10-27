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

 const reverseString = (string) => {
   let reversedString = '';
   for (let i = string.length - 1; i >= 0; i -= 1) {
     reversedString += string.charAt(i);
   }
   return reversedString;
 }

 export { capitalize, reverseString }
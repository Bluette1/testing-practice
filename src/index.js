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

 const calculator = {
   add: (first, sec) => {
     return first + sec;
   },

   subtract: (first, sec) => {
     return first - sec;
   },

   divide: (first, sec) => {
     return first / sec;
   },

   multiply: (first, sec) => {
     return first * sec;
   }

 }

 export { capitalize, reverseString, calculator }
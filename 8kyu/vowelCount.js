// Return the number (count) of vowels in the given string.
//We will consider a, e, i, o, u as vowels for this Kata (but not y).

const getCount = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];

  const strArr = str.split('');      // ["c", "h", "a", "i"]

  return strArr.filter((char => vowels.includes(char))).length
}

// getCount("chai")

// const getCount = (str) => {
//   let vowelsCount = 0
//   const vowels = ["a", "e", "i", "o", "u"];

//   for (i = 0; i < str.length; i++) {
//     for (j = 0; j < vowels.length; j++) {
//       if (str[i] === vowels[j]) {
//         vowelsCount ++;
//       } 
//     }
//   }

//   return vowelsCount;
// }

const res = getCount("chai")
console.log(res)

// learnt split: converts strings into array of its characters
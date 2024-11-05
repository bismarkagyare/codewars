// const duplicateEncode = (str) => {
//   let result = ""
//   const countStr = {}

//   for (const char of str.toLowerCase()) {
//     countStr[char] = (countStr[char] || 0) + 1
//   }

//   for (const char of str.toLowerCase()) {
//     result += countStr[char] >= 2 ? ")" : "("
//   }

//   return result;
// }


const duplicateEncode = (word) => {
  return word
    .toLowerCase()
    .split("")
    .map((cv, i, a) => {
      return a.indexOf(cv) === a.lastIndexOf(cv) ? "(" : ")";
    })
    .join("");
};

const res = duplicateEncode("recede")
console.log(res)
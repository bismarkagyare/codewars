const duplicateEncode = (str) => {
  let result = ""
  const countStr = {}

  for (const char of str.toLowerCase()) {
    countStr[char] = (countStr[char] || 0) + 1
  }

  for (const char of str.toLowerCase()) {
    result += countStr[char] >= 2 ? ")" : "("
  }

  return result;
}

const res = duplicateEncode("recede")
console.log(res)

// function duplicateEncode(word){
//   return word
//     .toLowerCase()
//     .split('')
//     .map( function (a, i, w) {
//       return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//     })
//     .join('');
// }
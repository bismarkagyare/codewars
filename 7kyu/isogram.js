// a word with no repeating characters is an isogram

// const isogram = (str) => {
//   if (!str.length) return true;

//   const strArr = str.toLowerCase().split('')
//   const newSet = [...new Set(strArr)]

//   if (strArr.length === newSet.length) {
//     return true
//   } else {
//     return false
//   }
// }

const isogram = (str) => {
  const normalised = str.toLowerCase()
  return new Set(normalised).size === str.length
}
//const letters = ['a', 'b', 'c', 'a'];

const res = isogram('abc')

console.log(res)

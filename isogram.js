// a word with no repeating characters is an isogram

const isogram = (str) => {
  if (!str.length) return true;

  const strArr = str.toLowerCase().split('')
  const newSet = [...new Set(strArr)]

  if (strArr.length === newSet.length) {
    return true
  } else {
    return false
  }
}

//const letters = ['a', 'b', 'c', 'a'];

const res = isogram('abcA')

console.log(res)

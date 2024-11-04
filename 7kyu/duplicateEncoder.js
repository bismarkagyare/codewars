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


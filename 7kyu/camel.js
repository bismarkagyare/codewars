const solution = (str) => {
  if (str === "") return ""

  let resultStr = ''

  for (const char of str) {
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
      resultStr += " "
    }

    resultStr += char;
  }

  return resultStr;
}

const res = solution("camelCase")
console.log(res)

//camel C
function permutations(str) {
  if (str.length <= 1) return [str]

  const result = new Set();

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i]
    const remainingChars = str.slice(0, i) + str.slice(i + 1)

    //recursively get permutations of remaining chars
    const permsOfRemaining = permutations(remainingChars)

    for (const perm of permsOfRemaining) {
      result.add(currentChar + perm)
    }
  }

  return Array.from(result)
}

const res = permutations("aabb")
console.log(res)

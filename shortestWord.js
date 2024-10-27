// Simple, given a string of words, return the length of the shortest word(s).

const findShort = (s) => {
  const wordsArr = s.split(' ')
  let wordInitialiser = 100000

  for (i = 0; i < wordsArr.length; i++) {
    let wordLength = wordsArr[i].length;
    if (wordLength < wordInitialiser) {
      wordInitialiser = wordLength
    }
  }

  return wordInitialiser;
}   



const res = findShort("might santiago trafford");
console.log(res)
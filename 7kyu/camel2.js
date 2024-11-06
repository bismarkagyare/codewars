const toCamelCase = (str) => {
  const wordsArr = str.split(/[-_]/);


  for (let i = 1; i < wordsArr.length; i++) {
    wordsArr[i] = wordsArr[i].charAt(0).toUpperCase() + wordsArr[i].slice(1).toLowerCase()
  }

  return wordsArr.join('');
};

const res = toCamelCase("the_stealth_warrior");
console.log(res);

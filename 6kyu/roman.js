const RomanNumerals = {
  toRoman: function(num) {
    let resultStr = ''

    const romanNumerals = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };

    Object.entries(romanNumerals).forEach(([key, value]) => {
      while (num >= value) {
        num -= value
        resultStr += key
      }
    })
    
    return resultStr;
  },

  fromRoman: function(str) {
    return 4
  }
}


console.log(RomanNumerals.toRoman(20))
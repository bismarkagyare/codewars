// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// const createPhoneNumber = (numbers) => {
//   if (numbers.length !== 10 || numbers.some((num) => num < 0 || num > 9)) {
//     throw new Error("Invalid");
//   }

//   const areaCode = numbers.slice(0, 3).join("");
//   console.log("area code:", areaCode);
//   const middle = numbers.slice(3, 6).join("");
//   const last = numbers.slice(-4).join("");

//   const result = `(${areaCode}) ${middle}-${last}`;
//   return result;
// };

const createPhoneNumber = (numbers) => {
  let format = "(xxx) xxx-xxxx"

  for (i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i])
  }

  return format;
}


const res = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log("result: ", res);

// learnt slice, join, replace methods.

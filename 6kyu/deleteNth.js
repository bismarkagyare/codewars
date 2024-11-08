// const deleteNth = (arr, n) => {
//   const newArr = [];

//   const countArr = {};

//   for (const num of arr) {
//     countArr[num] = countArr[num] || 0;

//     if (countArr[num] < n) {
//       newArr.push(num);
//       countArr[num] += 1;
//     }
//   }

//   console.log(countArr);

//   return newArr;
// };

// const res = deleteNth([20, 37, 20, 21], 1);
// console.log(res);

const deleteNth = (arr, n) => {
  const countMap = new Map()

  return arr.filter((num) => {
    const count = countMap.get(num) || 0

    if (count < n) {
      countMap.set(num, count + 1)
      return true
    }

    return false
  })
}

const res = deleteNth([20, 37, 20, 21], 1);
console.log(res);
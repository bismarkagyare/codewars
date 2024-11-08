const deleteNth = (arr, n) => {
  const newArr = []

  const countArr = {}
  
  for (const num of arr) {
    countArr[num] = (countArr[num] || 0) + 1
  }

  for (const num of arr) {
    if (countArr[num] < n) {
      newArr.push(num)
      countArr[num]++
    }
  }

  console.log(countArr)

  return newArr;
}


const res = deleteNth([20,37,20,21])
console.log(res);
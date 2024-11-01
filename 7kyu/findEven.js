const findEvenIndex = (arr) => {
  if (!arr.length) return -1;

  let sumLeft = 0;
  let sumRight = arr.reduce((acc, val) => acc + val, 0);

  for (i = 0; i < arr.length; i++) {
    sumRight -= arr[i]

    if (sumLeft === sumRight) {
      return i;
    }

    sumLeft += arr[i]
  }

  return -1;
}


const res = findEvenIndex([4, 5, 3, 4, 5])
console.log(res)
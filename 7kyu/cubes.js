const findNB = (m) => {
  let sum = 0;
  let n =0;

  while (sum < m) {
    const total = Math.pow(n, 3)
    sum += total;
    if (sum === m) return n;
    n++;
  }

  return -1;
}

const res = findNB(1071225)
console.log(res)
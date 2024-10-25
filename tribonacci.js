// sum the last three digits to generate the next one
// ([1, 1, 1], 5) => [1, 1, 1, 3, 5]

const tribonacci = (signature, n) => {
  if (n === 0) return [];

  if (n <= 3) return signature;

  while (signature.length < n) {
    const lastThree = signature.slice(-3);
    signature.push(lastThree.reduce((acc, val) => acc + val, 0))
  }

  return signature;
};

const res = tribonacci([1, 1, 1], 1)
console.log(res)
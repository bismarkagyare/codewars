// const compSame = (a, b) => {
//   if (a.length !== b.length) return false;

//   if (!a.length || !b.length) return false;

//   const squaresOfA = a.map((a) => a * a);

//   const sortedA = squaresOfA.sort((a, b) => a - b);
//   const sortedB = b.sort((a, b) => a - b);

//   for (i = 0; i < sortedA.length; i++) {
//     if (sortedA[i] !== sortedB[i]) {
//       return false
//     }
//   }

//   return true

// };

const compSame = (a, b) => {
  if (a.length !== b.length) return false;

  if (!a.length || !b.length) return false;

  const sortedA = a.map(num => num * num).sort((x, y) => x - y)
  const sortedB = b.sort((x, y) => x - y)

  return sortedA.every((value, index) => value === sortedB[index])
}

const res = compSame([2, 4, 6, 5], [4, 16, 36, 5]);
console.log(res);

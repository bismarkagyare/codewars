const findNB = (m) => {
  let volumeSum = 0;
  let n =0;

  // n is the cube count

  // while (volumeSum < m) {
  //   volumeSum += Math.pow(n, 3)
  //   if (volumeSum === m) return n;
  //   n++;
  // }

  while (volumeSum < m) {
    n++
    volumeSum += Math.pow(n, 3)
  }

  return volumeSum === m ? n : -1;
}

const res = findNB(1071225)
console.log(res)
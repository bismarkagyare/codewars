function outer(a) {
  return function(b) {
    return a + b
  }
}

const res = outer(5)
console.log(res(4))
function zero (operation) {
  return operation ? operation(0) : 0
}

function one(operation) {
  return operation ? operation(1) : 1
}

function two(operation) {
  return operation ? operation(2) : 2
}

function three(operation) {
  return operation ? operation(3) : 3
}

function four(operation) {
  return operation ? operation(4) : 4
}

function five(operation) {
  return operation ? operation(5) : 5
}

function six(operation) {
  return operation ? operation(6) : 6
}

function seven(operation) {
  return operation ? operation(7) : 7
}

function eight(operation) {
  return operation ? operation(8) : 8
}

function nine(operation) {
  return operation ? operation(9) : 9
}

function plus(a) {
  return function(b) {
    return a + b
  }
}

function times(a) {
  return function(b) {
    return a * b
  }
}

function minus(a) {
  return function(b) {
    return a - b
  }
}

function dividedBy(a) {
  return function(b) {
    return a / b
  }
}

console.log(seven(times(five())))

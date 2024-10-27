// const likes = (arr) => {
//   if (!arr.length) return "no one likes this"

//   if (arr.length === 1) {
//     return `${arr[0]} likes this`
//   }

//   if (arr.length === 2) {
//     return `${arr[0]} and ${arr[1]} like this`
//   }

//   if (arr.length === 3) {
//     return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`
//   }

//   if (arr.length > 3) {
//     return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`
//   }
// }


const likes = (arr) => {
  switch (arr.length) {
    case 0: return "no one likes this"
    case 1: return `${arr[0]} likes this`
    case 2: return `${arr[0]} and ${arr[1]} like this`
    case 3: return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`
    
    default: return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`
  }
}

const res = likes(['Mark', 'Peter', 'Kwame', 'Kojo', 'Kofi'])
console.log(res)
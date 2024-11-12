// const rgb = (r, g, b) => {

//   const red = Math.min(255, Math.max(0, r))
//   const green = Math.min(255, Math.max(0, g))
//   const blue = Math.min(255, Math.max(0, b ))

//   const redHex = red.toString(16).padStart(2, "0").toUpperCase()
//   const greenHex = green.toString(16).padStart(2, "0").toUpperCase()
//   const blueHex = blue.toString(16).padStart(2, "0").toUpperCase()

//   const hexColor = [redHex, greenHex, blueHex].join("")

//   return hexColor;
// }

const clamp = (value) => Math.min(255, Math.max(0, value))

const toHex = (value) => clamp(value).toString(16).toUpperCase().padStart(2, "0")

const rgb = (r, g, b) => {
  return [r, g, b].map(toHex).join('')
}

const res = rgb(255, 255, 0)

console.log(res);
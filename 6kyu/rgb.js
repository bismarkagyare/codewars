const rgb = (r, g, b) => {

  const red = Math.min(255, Math.max(0, r))
  const green = Math.min(255, Math.max(0, g))
  const blue = Math.min(255, Math.max(0, b ))

  const redHex = red.toString(16).padStart(2, "0").toUpperCase()
  const greenHex = green.toString(16).padStart(2, "0").toUpperCase()
  const blueHex = blue.toString(16).padStart(2, "0").toUpperCase()

  const hexColor = [redHex, greenHex, blueHex].join("")

  return hexColor;
}

const res = rgb(255, 255, 0)

console.log(res);
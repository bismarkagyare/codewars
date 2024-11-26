function convertDuration(seconds) {
  if (seconds === 0) return "now";
  if (seconds < 0) throw new Error("Invalid input");

  let remainder = 0;
  let result = 0

  // let secondsInYear = 31556000
  // let secondsInDay = 86400
  // let secondsInHour = 3600
  let secondsInMinute = 60
  //let secondInSecond = 1

  if (seconds) {
    result = Math.floor(seconds / secondsInMinute);
    remainder = seconds % secondsInMinute
  }

  return `${result} minute and ${remainder} seconds`
}


const res = convertDuration(62)
console.log(res)
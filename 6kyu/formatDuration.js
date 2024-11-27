function convertDuration(seconds) {
  if (seconds === 0) return "now";
  if (seconds < 0) throw new Error("Invalid input");

  let result = [];

  const units = [
    { name: "year", value: 31536000 },
    { name: "day", value: 86400 },
    { name: "hour", value: 3600 },
    { name: "minute", value: 60 },
    { name: "second", value: 1 },
  ];
  
  for (const unit of units) {
    if (seconds >= unit.value) {
      const count = Math.floor(seconds / unit.value)
      seconds %= unit.value
      result.push(`${count} ${unit.name}${count > 1 ? "s" : ""}`)
    }
  }

  if (result.length === 1) {
    return result[0]
  } else if (result.length === 2) {
    return `${result[0]} and ${result[1]}`
  } else {
    const last = result.pop()
    return `${result.join(", ")} and ${last}`
  }

}

const res = convertDuration(34661234567);
console.log(res);

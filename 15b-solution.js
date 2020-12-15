let memory = require("fs")
  .readFileSync("./15-input.txt", "utf-8")
  .split(",")
  .map((e) => parseInt(e));

let lastOccurrences = new Map();
memory.map((e, i) => lastOccurrences.set(e, i + 1));
console.log("initialMap", lastOccurrences);
let count = memory.length;
let latestValue = memory[count - 1];
while (count < 30000000) {
  let lastOccurrence = lastOccurrences.get(latestValue);
  if (lastOccurrence === undefined) {
    lastOccurrences.set(latestValue, count);
    latestValue = 0;
  } else {
    let lastValue = latestValue;
    latestValue = count - lastOccurrence;
    lastOccurrences.set(lastValue, count);
  }
  count++;
}
console.log(latestValue);

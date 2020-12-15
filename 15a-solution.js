let memory = require("fs")
  .readFileSync("./15-input.txt", "utf-8")
  .split(",")
  .map((e) => parseInt(e));

let count = memory.length - 1;
while (count <= 2020) {
  firstOccurence = memory.indexOf(memory[count]);
  lastOccurence = memory
    .map((e, i) => [e, i])
    .filter((e, i) => e[0] == memory[count] && i < count)
    .slice(-1);
  if (firstOccurence == count) {
    memory.push(0);
  } else {
    memory.push(count - lastOccurence[0][1]);
  }
  count++;
}

console.log(memory[2019]);

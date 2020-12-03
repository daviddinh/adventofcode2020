let input = require("fs")
  .readFileSync("./3-input.txt", "utf-8")
  .split("\n")
  .map(e => e.split(""))

let treesHit = (right = 1, down = 1, forest = input) =>
  forest
    .filter((_, i) => i % down == 0)
    .filter((row, i) => row[(i * right) % row.length] === "#").length

console.log(
  treesHit(1) * treesHit(3) * treesHit(5) * treesHit(7) * treesHit(1, 2)
)

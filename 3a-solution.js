let treesHit = require("fs").readFileSync("./3-input.txt", "utf-8")
  .split("\n")
  .map(e => e.split(""))
  .filter((row, i) => row[(i * 3) % row.length] === "#").length

console.log(treesHit)

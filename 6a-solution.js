let declarations = require("fs")
  .readFileSync("./6-input.txt", "utf-8")
  .split("\n\n")
  .reduce((sum, e) => {
    let yesses = []
    e.split("\n").map(f => f.split("").map(g => { if (yesses.indexOf(g) === -1) yesses.push(g) }
    ))
    sum += yesses.length
    return sum
  }, 0)

console.log(declarations)

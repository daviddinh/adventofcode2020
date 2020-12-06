let declarations = require("fs")
  .readFileSync("./6-input.txt", "utf-8")
  .split("\n\n")
  .reduce((sum, e) => {
    let yesses = []
    e.split("\n")
      .join("")
      .split("")
      .map(f => {
        if (yesses.indexOf(f) === -1) yesses.push(f)
      })

    return (sum += yesses.length)
  }, 0)

console.log(declarations)

let declarations = require("fs")
  .readFileSync("./06-input.txt", "utf-8")
  .split("\n\n")
  .reduce((sum, e) => {
    let yesses = {}
    let group = e.split("\n")
    group
      .join("")
      .split("")
      .map(f => {
        yesses[f] === undefined ? (yesses[f] = 1) : (yesses[f] += 1)
      })
    return (
      Object.keys(yesses).filter(e => yesses[e] == group.length).length + sum
    )
  }, 0)

console.log(declarations)

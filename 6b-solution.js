let sum = 0
let declarations = require("fs")
  .readFileSync("./6-testinput.txt", "utf-8")
  .split("\n\n")
  .reduce((sum, e) => {
    let yesses = {}
    let group = e.split("\n")
    group.map(f => f.split("").map((g)=> { yesses[g] ? yesses[g] += 1 : yesses[g] = 1 }
    ))
    let temp = Object.keys(yesses).filter(e => yesses[e] == group.length)
    console.log(yesses, group.length, temp)
    
    sum += temp.length
    return sum
  }, 0)

console.log(declarations)


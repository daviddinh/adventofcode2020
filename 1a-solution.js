const fs = require("fs")
let inputText = fs.readFileSync("./1a-input.txt", "utf-8")
let input = inputText.split("\n").map(e => parseInt(e))

// Rather than pairwise loops, we know that (2020 - e) will give us the value of the other key
let elements = input.filter(e => input.indexOf(2020 - e) !== -1)
console.log(elements[0] * elements[1])

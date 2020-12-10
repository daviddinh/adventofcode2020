const fs = require("fs")
let inputText = fs.readFileSync("./10-input.txt", "utf-8")
let input = inputText.split("\n").map(e => parseInt(e))
let sortedInput = input.sort((a,b) => a - b)
let output = sortedInput.reduce((differences, adapter, index) => {
  differences[adapter - (sortedInput[index-1] || 0)] += 1
  return differences
} , [0,0,0,0])
console.log(output)
console.log(output[1] * (output[3] + 1))

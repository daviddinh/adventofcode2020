const fs = require("fs")
let inputText = fs.readFileSync("./02-input.txt", "utf-8")

let input = inputText.split("\n").map(e => {
  let lineArray = e.split(" ")
  let positions = lineArray[0].split("-")

  let positionOne = positions[0] - 1 // They have no concept of index 0
  let positionTwo = positions[1] - 1 // They have no concept of index 0
  let character = lineArray[1][0] // Ignore ':'
  let password = lineArray[2]

  let policyCount = password
    .split("")
    .filter((e, i) => (i == positionOne || i == positionTwo) && e == character)
    .length
  return policyCount == 1
})

let validPasswords = input => input.filter(e => e).length

console.log(validPasswords(input))

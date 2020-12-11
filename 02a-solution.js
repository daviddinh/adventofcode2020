const fs = require("fs")
let inputText = fs.readFileSync("./02-input.txt", "utf-8")

let input = inputText.split("\n").map(e => {
  let lineArray = e.split(" ")
  let bounds = lineArray[0].split("-")

  let lowerBound = parseInt(bounds[0])
  let upperBound = parseInt(bounds[1])
  let character = lineArray[1][0] // Ignore ':'
  let password = lineArray[2]

  let occurences = password.split("").filter(e => e == character).length
  return occurences >= lowerBound && occurences <= upperBound
})

let validPasswords = input => input.filter(e => e).length

console.log(validPasswords(input))

const fs = require("fs")
let inputText = fs.readFileSync("./01-input.txt", "utf-8")
let input = inputText.split("\n").map(e => parseInt(e))
console.time();
// Extract the previous solution into a function so that we can re-apply it
// after subtracting a first element
let findTwoElementsThatSumTo = (sum, array) => array.filter(e => array.indexOf(sum - e) !== -1)
let elements = input.filter((e,i) => findTwoElementsThatSumTo((2020 - e), input).length == 2)

console.log(elements)
console.log(elements[0] * elements[1] * elements[2])
console.timeEnd();
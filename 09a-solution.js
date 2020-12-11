const fs = require("fs")
let inputText = fs.readFileSync("./09-input.txt", "utf-8")
let input = inputText.split("\n").map(e => parseInt(e))

// From Solution 1
let findTwoElementsThatSumTo = (sum, array) => {
  return array.filter(e => array.indexOf(sum - e) !== -1)
}

let invalidNumbers = preambleLength =>
  input
    .slice(preambleLength)
    .filter(
      (e, i) =>
        findTwoElementsThatSumTo(e, input.slice(i, preambleLength + i)).length <
        2
    )

console.log(invalidNumbers(25)[0])

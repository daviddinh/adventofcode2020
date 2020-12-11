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
    
let firstInvalidNumber = invalidNumbers(25)[0]
let firstSumArray = []

input.some((e, i) => {
  let sum = 0
  let nextNumber = i + 1
  let sumArray = []

  while (sum < firstInvalidNumber) {
    sum += input[nextNumber]
    sumArray.push(input[nextNumber])
    nextNumber++
  }
  if (sum == firstInvalidNumber && firstSumArray.length == 0) {
    firstSumArray = sumArray
    return true
  }
})

console.log(Math.min(...firstSumArray) + Math.max(...firstSumArray))

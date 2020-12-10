const fs = require("fs")
let inputText = fs.readFileSync("./10-input.txt", "utf-8")
let input = inputText.split("\n").map(e => parseInt(e))
let sortedInput = input.sort((a, b) => a - b)

// Checking if there is a pattern based on differences
let differences = sortedInput.map((e, i) => e - (sortedInput[i - 1] || 0))

// Suppose I didn't do a maths degree.
// Look at where we can jump, it is only where there are groups of 1's.
// Look at how many combinations there are based on number of consecutive ones.
// List all the combinations

// 1: 1 - [1]
// 2: 2 - [1,1] , [2]
// 3: 4 - [1,1,1],[3], [2, 1], [1, 2]
// 4: 7 - [1,1,1,1],[3,1],[1,3],[2,2],[2,1,1],[1,2,1],[1,1,2]

// 1st test case is 2^1 * 4^1 = 8
// 2nd test case is 2^1 * 4^1 * 7^4 = 19208

// Find the number of each of these groups
let differenceCounts = [0, 0, 0, 0, 0, 0]
let currentCount = 0
differences.map((e, i) => {
  if (e === 3) {
    differenceCounts[currentCount] += 1
    currentCount = 0
  } else {
    currentCount++
  }
})

// Account for trailing 1s
if (currentCount > 0) differenceCounts[currentCount] += 1

// There aren't any sections with 5 1's in a row,
// That would be too cruel
console.log(
  Math.pow(2, differenceCounts[2]) *
    Math.pow(4, differenceCounts[3]) *
    Math.pow(7, differenceCounts[4])
)

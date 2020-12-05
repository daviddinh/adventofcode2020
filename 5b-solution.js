let seatIds = require("fs")
  .readFileSync("./5-input.txt", "utf-8")
  .split("\n")
  .map(e =>
    e.split("").reduce(
      (seat, f, i) => {
        if (f == "B") seat.row += Math.pow(2, 6 - i)
        if (f == "R") seat.column += Math.pow(2, 2 - (i % 7))
        return seat
      },
      { row: 0, column: 0 }
    )
  )
  .map(e => e.row * 8 + e.column)

let highestId = Math.max(...seatIds)
let lowestId = Math.min(...seatIds)
let allIds = Array.from(
  { length: highestId - lowestId },
  (_, k) => k + lowestId
)
let mySeatId = allIds.filter(e => seatIds.indexOf(e) === -1)

console.log(mySeatId)

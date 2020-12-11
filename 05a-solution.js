let seatIds = require("fs")
  .readFileSync("./05-input.txt", "utf-8")
  .split("\n")
  .map(e =>
    e.split("").reduce(
      (seat, f, i) => {
        // Alternative solution is to convert to binary, but boring!
        if (f == "B") seat.row += Math.pow(2, 6 - i)
        if (f == "R") seat.column += Math.pow(2, 2 - (i % 7))
        return seat
      },
      { row: 0, column: 0 }
    )
  )
  .map(e => e.row * 8 + e.column)

console.log(Math.max(...seatIds))

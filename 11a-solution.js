const fs = require("fs")
let inputText = fs.readFileSync("./11-input.txt", "utf-8")
let seatingPlan = inputText.split("\n").map(e => e.split(""))

let getSeatsAround = (seatingPlan, x , y) => {
  let seats = [];
  if (seatingPlan[x-1]){
    seats.push(seatingPlan[x-1][y-1])
    seats.push(seatingPlan[x-1][y])
    seats.push(seatingPlan[x-1][y+1])
  }
  seats.push(seatingPlan[x][y-1])
  seats.push(seatingPlan[x][y+1])

  if (seatingPlan[x+1]) {
    seats.push(seatingPlan[x+1][y-1])
    seats.push(seatingPlan[x+1][y])
    seats.push(seatingPlan[x+1][y+1])
  }
  return seats.filter(e => !!e)
}

let getTypeCounts = (seats) => {
  return seats.reduce((count, e) => {
    if (e == 'L') count[0]++ // Chairs
    if (e == '#') count[1]++ // Occupied
    if (e == '.') count[2]++ // Floor
    return count
  }, [0, 0, 0])
}

let newState = (seatingPlan, x, y) => {
  let seats = getSeatsAround(seatingPlan, x, y)
  let typeCounts = getTypeCounts(seats)
  let spot = seatingPlan[x][y]
  if (spot == 'L' && typeCounts[1] == 0) {
    stateChanged = true;
    return '#'
  }
  if (spot == '#' && typeCounts[1] >= 4) {
    stateChanged = true;
    return 'L'
  }
  return spot
}

let getNextRound = (seatingPlan) => 
  seatingPlan.map((row, i) => 
    row.map((seat, j) => 
      newState(seatingPlan, i, j)))
  

let stateChanged = true 
while (stateChanged == true) {
  stateChanged = false
  seatingPlan = getNextRound(seatingPlan)
}
console.log(seatingPlan.map(e => e.join('')).join('\r\n').match(/#/gm).length)
// console.log(getNextRound(input).map(e => e.join('')).join('\r\n'))
// Seat is empty and no occupied seats adjacent, becomes occupied

// Seat is occupied and four or more adjacent are occupied, becomes empty

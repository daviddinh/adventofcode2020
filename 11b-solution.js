const fs = require("fs");
let inputText = fs.readFileSync("./11-input.txt", "utf-8");
let seatingPlan = inputText.split("\n").map((e) => e.split(""));

let getSeatsAround = (seatingPlan, x, y) => {
  let seats = [];
  if (seatingPlan[x - 1]) {
    seats.push(findSeat(seatingPlan, x, y, -1, -1));
    seats.push(findSeat(seatingPlan, x, y, -1, 0));
    seats.push(findSeat(seatingPlan, x, y, -1, +1));
  }

  seats.push(findSeat(seatingPlan, x, y, 0, -1));
  seats.push(findSeat(seatingPlan, x, y, 0, +1));

  if (seatingPlan[x + 1]) {
    seats.push(findSeat(seatingPlan, x, y, +1, -1));
    seats.push(findSeat(seatingPlan, x, y, +1, 0));
    seats.push(findSeat(seatingPlan, x, y, +1, +1));
  }

  return seats.filter((e) => !!e);
};

let isSeat = (seat) => seat == "L" || seat == "#";

let findSeat = (seatingPlan, x, y, dX, dY) => {
  let currentSeat = null;
  let currentX = x;
  let currentY = y;
  while (true) {
    currentX += dX;
    currentY += dY;
    if (seatingPlan[currentX]) {
      nextSeat = seatingPlan[currentX][currentY];
      if (isSeat(nextSeat)) return nextSeat;
      if (nextSeat === undefined) return nextSeat;
    } else {
      return undefined;
    }
  }
};

let getTypeCounts = (seats) => {
  return seats.reduce(
    (count, e) => {
      if (e == "L") count[0]++; // Chairs
      if (e == "#") count[1]++; // Occupied
      if (e == ".") count[2]++; // Floor
      return count;
    },
    [0, 0, 0]
  );
};

let newState = (seatingPlan, x, y) => {
  let seats = getSeatsAround(seatingPlan, x, y);
  let typeCounts = getTypeCounts(seats);
  let spot = seatingPlan[x][y];
  if (spot == "L" && typeCounts[1] == 0) {
    stateChanged = true;
    return "#";
  }
  if (spot == "#" && typeCounts[1] >= 5) {
    stateChanged = true;
    return "L";
  }
  return spot;
};

let getNextRound = (seatingPlan) =>
  seatingPlan.map((row, i) =>
    row.map((seat, j) => newState(seatingPlan, i, j))
  );

let stateChanged = true;
while (stateChanged == true) {
  stateChanged = false;
  seatingPlan = getNextRound(seatingPlan);
}

console.log(
  seatingPlan
    .map((e) => e.join(""))
    .join("\r\n")
    .match(/#/gm).length
);

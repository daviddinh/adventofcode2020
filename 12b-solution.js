let instructions = require("fs")
  .readFileSync("./12-input.txt", "utf-8")
  .split("\n");

let directions = ["N", "E", "S", "W"];
let rotations = ["R", "L"];
let currentX = 0;
let currentY = 0;
let waypointX = 10;
let waypointY = 1;

let moveWaypoint = (direction, amount) => {
  if (direction == "N") waypointY += amount;
  if (direction == "S") waypointY -= amount;
  if (direction == "E") waypointX += amount;
  if (direction == "W") waypointX -= amount;
};

let turnWaypoint = (rotation, amount) => {
  if ((rotation == "R" && amount == 90) || (rotation == "L" && amount == 270)) {
    let newX = waypointY;
    let newY = -waypointX;
    waypointX = newX;
    waypointY = newY;
  }

  if (amount == 180) {
    waypointY = -waypointY;
    waypointX = -waypointX;
  }

  if ((rotation == "R" && amount == 270) || (rotation == "L" && amount == 90)) {
    let newX = -waypointY;
    let newY = waypointX;
    waypointX = newX;
    waypointY = newY;
  }
};

let moveShip = amount => {
  currentX += amount * waypointX;
  currentY += amount * waypointY;
};

instructions.map(instruction => {
  let amount = parseInt(instruction.match(/\d+/g)[0]);
  let action = instruction[0];
  if (action == "F") moveShip(amount);
  if (directions.indexOf(action) !== -1) moveWaypoint(action, amount);
  if (rotations.indexOf(action) !== -1) turnWaypoint(action, amount);
});

console.log(Math.abs(currentX) + Math.abs(currentY));

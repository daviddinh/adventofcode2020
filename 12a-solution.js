let instructions = require("fs")
  .readFileSync("./12-input.txt", "utf-8")
  .split("\n");

let directions = ["N", "E", "S", "W"];
let rotations = ["R", "L"];
let currentDirection = "E";
let currentX = 0;
let currentY = 0;

let move = (direction, amount) => {
  if (direction == "N") currentY += amount;
  if (direction == "S") currentY -= amount;
  if (direction == "E") currentX += amount;
  if (direction == "W") currentX -= amount;
};

let turn = (rotation, amount) => {
  let directionIndex = directions.indexOf(currentDirection);
  let rotationModifier = amount / 90;
  if (rotation == "R")
    currentDirection = directions[(directionIndex + rotationModifier) % 4];
  if (rotation == "L")
    currentDirection = directions[(directionIndex - rotationModifier + 4) % 4];
};

instructions.map(instruction => {
  let amount = parseInt(instruction.match(/\d+/g)[0]);
  let action = instruction[0];
  if (action == "F") move(currentDirection, amount);
  if (directions.indexOf(action) !== -1) move(action, amount);
  if (rotations.indexOf(action) !== -1) turn(action, amount);
});

console.log(Math.abs(currentX) + Math.abs(currentY));

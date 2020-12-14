let input = require("fs")
  .readFileSync("./14-input.txt", "utf-8")
  .split("\n");

console.log(input);

let currentMask = "";
let mem = [];

let writeValueToMemory = (index, value) => {
  // Flip the currentMask
  let flippedMask = currentMask.split("").reverse();
  let binary = (value >>> 0).toString(2);
  let flippedBinary = binary.split("").reverse();
  let newValue = flippedMask
    .map((e, i) => {
      if (e == "X") {
        if (flippedBinary[i] !== undefined) {
          return flippedBinary[i];
        } else {
          return 0;
        }
      } else {
        return e;
      }
    })
    .reverse()
    .join("");

  mem[index] = newValue;
};

input.map(instruction => {
  if (instruction.indexOf("mask") !== -1) {
    currentMask = instruction.split(" = ")[1];
  } else {
    numbers = instruction.match(/\d+/gm);
    writeValueToMemory(parseInt(numbers[0]), parseInt(numbers[1]));
  }
});

console.log(mem.filter(e => e).map(e => parseInt(e, 2)).reduce((sum, e) => sum + e, 0));

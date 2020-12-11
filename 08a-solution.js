let instructions = require("fs")
  .readFileSync("./08-input.txt", "utf-8")
  .split("\n");

let accumulator = 0;
let usedInstructions = [];
let nextInstruction = 0;
while (usedInstructions.indexOf(nextInstruction) === -1) {
  usedInstructions.push(nextInstruction);
  let instruction = instructions[nextInstruction].split(" ");
  if (instruction[0] == "acc") {
    accumulator += parseInt(instruction[1]);
    nextInstruction++;
  }
  if (instruction[0] == "nop") {
    nextInstruction++;
  }
  if (instruction[0] == "jmp") {
    nextInstruction += parseInt(instruction[1]);
  }
}

console.log(accumulator);

let instructions = require("fs")
  .readFileSync("./8-input.txt", "utf-8")
  .split("\n")

let i = 0
let accumulator = 0
let usedInstructions = []
let nextInstruction = 0

while(nextInstruction < instructions.length) {
  accumulator = 0
  usedInstructions = []
  nextInstruction = 0
  moddedInstructions = instructions.slice()
  moddedInstruction = moddedInstructions[i].split(" ")

  if(moddedInstruction[0] == 'nop') {
    moddedInstructions[i] = 'jmp ' + moddedInstruction[1]
  } else if (moddedInstruction[0] == 'jmp') {
    moddedInstructions[i] = 'nop ' + moddedInstruction[1]
  }
  
  while((usedInstructions.indexOf(nextInstruction) === -1) && nextInstruction < instructions.length)  {
    usedInstructions.push(nextInstruction)
    let instruction = moddedInstructions[nextInstruction].split(" ")
    if (instruction[0] == 'acc') {
      accumulator +=  parseInt(instruction[1])
      nextInstruction++
    }
    if (instruction[0] == 'nop') {
      nextInstruction++
    }
    if (instruction[0] == 'jmp') {
      nextInstruction += parseInt(instruction[1])
    }
  }
  i++

  if(nextInstruction >= instructions.length) console.log(accumulator)
}
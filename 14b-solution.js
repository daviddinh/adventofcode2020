let input = require("fs")
  .readFileSync("./14-testinput.txt", "utf-8")
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
      if (e == 'X') {
          return 'X'
      }
      if (e == '1') {
          return 1;
      }
      if (e == '0') {
        if (flippedBinary[i] !== undefined) {
            return flippedBinary[i];
        } else {
            return 0;
        }
      }
    })
    .reverse();
  console.log(newValue.join(''))
  // Based on the new Value we look for the 'X's and replace, because they are floating
  let xCount = newValue.join('').match(/X/gm).length
  console.log(xCount)
  let addresses = Array.from({length: Math.pow(xCount, 2)}, (_, i) => {
      let n = (i >>> 0).toString(2).split('')
      // Get the longest one and pad!
  })
  console.log(addresses)
  addresses.map(e => {
    let counter = 0
    let newAddress = newValue.slice().map(e => {
        if(e == 'X') {
            counter++
            return e[counter - 1]
        }
        return e
    })
    newAddress = newAddress.parseInt(2)
    console.log(newAddress)
    mem[newAddress] = newAddress
  })
};

input.map(instruction => {
  if (instruction.indexOf("mask") !== -1) {
    currentMask = instruction.split(" = ")[1];
  } else {
    numbers = instruction.match(/\d+/gm);
    writeValueToMemory(parseInt(numbers[0]), parseInt(numbers[1]));
  }
});

console.log(mem.filter(e => e).reduce((sum, e) => sum + e, 0));

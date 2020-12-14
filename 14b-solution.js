console.time("1");
let input = require("fs").readFileSync("./14-testinput.txt", "utf-8").split("\n");
// console.log(input);

let currentMask = "";
let mem = [];

let writeValueToMemory = (index, value) => {
  // Flip the currentMask
  let flippedMask = currentMask.split("").reverse();
  let binary = (index >>> 0).toString(2);
  let flippedBinary = binary.split("").reverse();
  let newValue = flippedMask
    .map((e, i) => {
      if (e == "X") {
        return "X";
      }
      if (e == "1") {
        return "1";
      }
      if (e == "0") {
        if (flippedBinary[i] == "1") {
          return flippedBinary[i];
        } else {
          return "0";
        }
      }
    })
    .reverse();
  let xCount = newValue.join("").match(/X/gm).length;

  let addresses = Array.from({ length: Math.pow(2, xCount) }, (_, i) => {
    let n = (i >>> 0).toString(2).split("");
    // Get the longest one and pad!
    while (n.length < (Math.pow(2, xCount) >>> 0).toString(2).length - 1) {
      n.unshift("0");
    }
    return n;
  });

  addresses.map((e) => {
    let counter = 0;
    let newAddress = newValue.slice().map((f) => {
      let newValue = f;
      if (f == "X") {
        newValue = e[counter];
        counter++;
      }
      return newValue;
    });
    newAddress = newAddress.join("");
    decimalAddress = parseInt(newAddress, 2);
    mem[decimalAddress] = value;
  });
};

input.map((instruction) => {
  if (instruction.indexOf("mask") !== -1) {
    currentMask = instruction.split(" = ")[1];
  } else {
    numbers = instruction.match(/\d+/gm);
    writeValueToMemory(parseInt(numbers[0]), parseInt(numbers[1]));
  }
});
console.log(mem.filter(e => e))
console.log(mem.filter((e) => e).reduce((sum, e) => sum + e, 0));
console.timeEnd("1");

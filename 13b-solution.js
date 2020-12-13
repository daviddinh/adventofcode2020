console.time("1");
let input = require("fs").readFileSync("./13-input.txt", "utf-8").split("\n");

let busIds = input[1]
  .split(",")
  .map((e, i) => [e, i])
  .filter((e) => e[0] !== "x")
  .map((e) => [parseInt(e[0]), e[1]]);

let currentTime = 0;
let currentTimeIncrement = busIds[0][0];

// The brute force solution takes too long
// So I need to find a bigger increment than 1 or the first bus ID
// They're all prime bus IDs, which means we dont need to worry about any potential shared divisors
// If you find the first occurrence where the first two bus IDs works, then you can
// Instead increment by busId 1 * busId 2 to find the number.
// Doing this a few times we can lower the volume of checks

busIds.slice(1).map((e, i) => {
  while ((currentTime + e[1]) % e[0] != 0) {
    currentTime += currentTimeIncrement;
  }
  currentTimeIncrement *= e[0];
});

console.log(currentTime);

// The solution below works for all the test cases,
// but brute forcing is too inefficient for the real input.

// while (earliestTime == null) {
//   currentTime += currentTimeIncrement;
//   // console.log(currentTime)
//     console.log(busIds.map(e => currentTime % e[0]))
//   if (
//     busIds.filter((e) => (currentTime+ e[1]) % e[0] == 0).length ==
//     busIds.length
//   )
//     earliestTime = currentTime;
// }
// console.log(currentTime);

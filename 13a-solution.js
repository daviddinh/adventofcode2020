let input = require("fs").readFileSync("./13-input.txt", "utf-8").split("\n");

let earliestDeparture = parseInt(input[0]);
let busIds = input[1]
  .split(",")
  .filter((e) => e !== "x")
  .map((e) => parseInt(e));

let earliestBus = null;
let currentTime = earliestDeparture;
while (earliestBus == null) {
  currentTime++;
  busLeaving = busIds
    .map((e, i) => [currentTime % e, e])
    .filter((e) => e[0] == 0);
  if (busLeaving.length > 0) earliestBus = busLeaving[0][1];
}

console.log((currentTime - earliestDeparture) * earliestBus);

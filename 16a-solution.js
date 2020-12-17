let notes = require("fs").readFileSync("./16-input.txt", "utf-8").split("\n\n");

let rules = notes[0].split("\n").map((e) => {
  let ruleSplit = e.split(": ");
  let ruleName = ruleSplit[0];
  let numbers = ruleSplit[1].match(/\d+/gm).map((f) => parseInt(f));
  return [ruleName, ...numbers];
});

let myTicket = notes[1]
  .split("\n")[1]
  .split(",")
  .map((e) => parseInt(e));

let nearbyTickets = notes[2]
  .split("\n")
  .slice(1)
  .map((e) => e.split(",").map((f) => parseInt(f)));

let findInvalidValues = (ticket) => {
  return ticket
    .map((e) => {
      let validRules = rules.filter(
        (rule) =>
          (e >= rule[1] && e <= rule[2]) || (e >= rule[3] && e <= rule[4])
      );
      if (validRules.length == 0) return e;
      else return null;
    })
    .filter((e) => e);
};

let invalidValues = nearbyTickets.map((e) => findInvalidValues(e)).flat();

console.log(invalidValues.reduce((sum, e) => sum + e, 0));

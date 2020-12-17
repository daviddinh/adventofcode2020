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

let validTickets = nearbyTickets.filter(
  (e) => findInvalidValues(e).length == 0
);
validTickets.push(myTicket);

let checkRule = (rule, value) => {
  return (
    (value >= rule[1] && value <= rule[2]) ||
    (value >= rule[3] && value <= rule[4])
  );
};

let possibleRulePositions = rules.map((rule, index) => {
  // Each rule we check against each number on the ticket
  return validTickets
    .map((ticket) => ticket.map((number) => checkRule(rule, number)))
    .reduce(
      (possibles, e, _, arr) => {
        e.map((f, i) => {
          if (!f) possibles[i] = null;
        });
        return possibles;
      },
      Array.from({ length: validTickets.length }, (_, k) => k)
    );
  // Rules are valid on this indices
});

let rulePositions = rules.map((e) => null);

// Remove the impossibles
let removeImpossibles = (possibleRulePositions) => {
  return possibleRulePositions.map((e) => e.filter((f) => f !== null));
};

let actualPossibles = removeImpossibles(possibleRulePositions);

let getCounts = (rulePossibilities) => {
  return rulePossibilities.reduce((counts, e, i) => {
    e.map((f) => {
      if (counts[f]) {
        counts[f]++;
      } else {
        counts[f] = 1;
      }
    });
    return counts;
  }, {});
};

let currentCounts = getCounts(actualPossibles);
// 9 has 3 options, lets explore those

// console.log(actualPossibles);
let count = 0
// while (count < ) {
while (rulePositions.indexOf(null) !== -1) {
  let allocatedRules = [];
  // if (actualPossibles.filter(e => e.length == 1)) break;
  // actualPossibles.forEach((e, i) => {
  //   if (currentCounts[e[0]] == 1) {
  //     rulePositions[e[0]] = i;
  //     allocatedRules.push(e[0]);
  //     console.log(e[0])
  //   }
  // });
  for (const property in currentCounts) {
    // console.log(`${property}: ${object[property]}`);
    if (currentCounts[property] == 1) {
      var indexFound = parseInt(property);
    }
  }

  ruleFound = actualPossibles.map((e,i) => {if(e.indexOf(indexFound) !== -1) return i; }).filter(e=>e)
  rulePositions[indexFound] = ruleFound[0]
  allocatedRules.push(indexFound)
  // console.log('actualPossibles', actualPossibles)
  actualPossibles.forEach((e, i) => {
    allocatedRules.forEach((f, j) => {
      if (e.indexOf(f) !== -1) {
        e.splice(e.indexOf(f), 1);
      }
    });
  });
  actualPossibles.splice(ruleFound[0], 1)
  currentCounts = getCounts(actualPossibles)
  count++
  console.log(rulePositions)
}

// console.log(validTickets);
// console.log(actualPossibles);
//   console.dir(actualPossibles, {depth: null, colors: true, maxArrayLength: null});
// console.dir(possibleRulePositions, {
//   depth: null,
//   colors: true,
//   maxArrayLength: null,
// });
// console.log(possibleRulePositions);
// console.log(Array.from(new Set(possibleRulePositions.flat())).sort((a,b) => a - b));
// console.log(allocatedRules)
console.log(currentCounts);
// console.log(rulePositions);

// console.log(
//   rulePositions
//     .map((e) => myTicket[e])
//     .reduce((multiplied, e) => multiplied * e, 1)
// );

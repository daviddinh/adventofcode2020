const regex = /(\d?\s?\w+ \w+) bag/gm

let rules = require("fs")
  .readFileSync("./7-input.txt", "utf-8")
  .split("\n")
  .map(rule => rule.match(regex))
  .map(rule =>
    rule.map(bag => {
      let bagSplit = bag.split(" ")
      bagSplit.length == 3
        ? (baggie = bagSplit.splice(0, 2).join(" "))
        : (baggie = [parseInt(bagSplit[0]), bagSplit.splice(1, 2).join(" ")])

      return baggie
    })
  )

let findNumberOfBagsInside = bag => {
  let rule = rules.filter(e => e[0] == bag)[0]
  let bagsInside = rule.slice(1)

  if (bagsInside[0][1] === "no other") {
    return 1
  } else {
    return bagsInside
      .map(bag => bag[0] * findNumberOfBagsInside(bag[1]))
      .reduce((sum, i) => sum + i, 1)
  }
}

console.log(findNumberOfBagsInside("shiny gold") - 1)

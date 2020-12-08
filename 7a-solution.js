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
        : (baggie = bagSplit.splice(1, 2).join(" "))

      return baggie
    })
  )

let findContainerBags = bag => rules.filter(e => e.slice(1).indexOf(bag) !== -1)

let currentSet = ["shiny gold"]
let total = []

while (currentSet.length > 0) {
  newSet = currentSet
    .map(e => findContainerBags(e))
    .reduce((set, i) => set.concat(i), [])
    .map(e => e[0])
  total = total.concat(newSet)
  currentSet = newSet
}
console.log(new Set(total).size)

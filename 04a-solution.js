const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]

let validPassports = require("fs")
  .readFileSync("./04-input.txt", "utf-8")
  .split("\n\n")
  .map(e => e.split("\n").join(" ").split(" "))
  .map(e =>
    e.reduce((passport, property) => {
      item = property.split(":")
      passport[item[0]] = item[1]
      return passport
    }, {})
  )
  .filter(
    e =>
      requiredFields.filter(field => e[field]).length == requiredFields.length
  ).length

console.log(validPassports)

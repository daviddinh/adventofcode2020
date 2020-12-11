const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]
const validEyeColors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]

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
  .filter(e => {
    // Check fields are present
    let hasRequiredFields =
      requiredFields.filter(field => e[field]).length == requiredFields.length
    if (!hasRequiredFields) return false

    // Check fields are valid
    let byr = parseInt(e.byr)
    let iyr = parseInt(e.iyr)
    let eyr = parseInt(e.eyr)
    let hgt = parseInt(e.hgt)
    let hgtUnit = e.hgt.split(hgt)[1]

    if (byr < 1920 || byr > 2002) return false
    if (iyr < 2010 || iyr > 2020) return false
    if (eyr < 2020 || eyr > 2030) return false
    if (hgtUnit == "") return false
    if (hgtUnit == "cm" && (hgt < 150 || hgt > 193)) return false
    if (hgtUnit == "in" && (hgt < 59 || hgt > 76)) return false
    if (!e.hcl.match("^#[a-f0-9]{6}$")) return false
    if (validEyeColors.indexOf(e.ecl) == -1) return false
    if (!e.pid.match("^[0-9]{9}$")) return false
    
    return true
  }).length

console.log(validPassports)

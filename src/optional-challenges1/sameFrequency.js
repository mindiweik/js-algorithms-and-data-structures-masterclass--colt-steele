const sameFrequency = (num1, num2) => {
  let strNum1 = num1.toString()
  let strNum2 = num2.toString()

  let countNum1 = {}

  for (let char in strNum1) {
    countNum1[strNum1[char]] = (countNum1[strNum1[char]] || 0) + 1
  }

  for (let char in strNum2) {
    if (!countNum1[strNum2[char]]) {
      return false
    } else {
      countNum1[strNum2[char]] -= 1
    }
  }

  return true
}

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false
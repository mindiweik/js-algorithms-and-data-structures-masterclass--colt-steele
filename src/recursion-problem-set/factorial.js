const factorial = (num) => {
  if (num <= 1) return 1
  return num * factorial(num - 1)
}

const test1 = factorial(1) // 1
const test2 = factorial(2) // 2
const test3 = factorial(4) // 24
const test4 = factorial(7) // 5040

console.log(test1)
console.log(test2)
console.log(test3)
console.log(test4)
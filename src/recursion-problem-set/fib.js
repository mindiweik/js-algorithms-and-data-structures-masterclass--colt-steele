const fib = (n) => {
  let fibCurrent = 1

  const fibHelper = (prevNum) => {
    n--
    if (n > 0) {
      let newPrevNum = fibCurrent
      fibCurrent += prevNum
      fibHelper(newPrevNum)
    }
  }

  fibHelper(0)

  return fibCurrent
}

const test1 = fib(4) // 3
const test2 = fib(10) // 55
const test3 = fib(28) // 317811
const test4 = fib(35) // 9227465

console.log(test1)
console.log(test2)
console.log(test3)
console.log(test4)
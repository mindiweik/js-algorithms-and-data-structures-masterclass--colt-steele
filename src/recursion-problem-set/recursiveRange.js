const recursiveRange = (num) => {
  let result = 0

  const helper = (n) => {
    if (n >= 0) {
      result += n
      helper (n - 1)
    }
  }

  helper(num)

  return result
}

const test1 = recursiveRange(6) // 21
const test2 = recursiveRange(10) // 55 

console.log(test1)
console.log(test2)
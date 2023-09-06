const power = (base, exponent) => {
  if (exponent === 0) return 1
  let result = 1
  
  const helper = (currExponent) => {
    if (currExponent === 0) return 1

    result *= base
    helper(currExponent - 1)
  }

  helper(exponent)

  return result
}

const test1 = power(2,0) // 1
const test2 = power(2,2) // 4
const test3 = power(2,4) // 16

console.log(test1)
console.log(test2)
console.log(test3)
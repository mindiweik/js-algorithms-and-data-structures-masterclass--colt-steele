// frequency pattern
function areThereDuplicatesFreq(...args) {
  let countObj = {}
  
  for (let arg in args) {
    countObj[args[arg]] = (countObj[args[arg]] || 0) + 1
  }
  
  for (let key in countObj) {
    if (countObj[key] > 1) {
      return true
    }
  }
  
  return false
}

// multiple pointers
const areThereDuplicates = (...args) => {
  let sorted = args.sort()
  
  let left = 0
  let right = 1

  while (right < args.length) {
    while (left < right) {
      if (args[left] === args[right]) return true
      left++
    }
    right++
  }
  
  return false
}

console.log(areThereDuplicatesFreq(1, 2, 3)) // false
console.log(areThereDuplicatesFreq(1, 2, 2)) // true 
console.log(areThereDuplicatesFreq('a', 'b', 'c', 'a')) // true 

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 
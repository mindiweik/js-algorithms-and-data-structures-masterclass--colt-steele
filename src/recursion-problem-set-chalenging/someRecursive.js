const someRecursive = (array, callback) => {
  if (array.length === 0) return false

  if (callback(array[0])) {
    return true
  } else {
    return someRecursive(array.slice(1), callback)
  }
}

// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

const test1 = someRecursive([1,2,3,4], isOdd) // true
const test2 = someRecursive([4,6,8,9], isOdd) // true
const test3 = someRecursive([4,6,8], isOdd) // false
const test4 = someRecursive([4,6,8], val => val > 10); // false

console.log(test1)
console.log(test2)
console.log(test3)
console.log(test4)
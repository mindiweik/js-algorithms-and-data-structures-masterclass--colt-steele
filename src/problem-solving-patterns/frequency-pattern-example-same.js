/** 
 * Write a function called same, which accepts two arrays.
 * 
 * The function should return true if every valie in the array 
 * has it's corresponding value squared in the second array.
 * 
 * The frequency of values must be the same.
 */


// NAIVE SOLUTION
// const same = (arr1, arr2) => {
//   // check if the length of the arrays are the same
//   if (arr1.length !== arr2.length) {
//     // if not, return false
//     return false
//   }

//   // create an obj to store the frequency of values
//   let freqCounter = {}

//   // loop through the first array
//   for (let i = 0; i < arr1.length; i++) {
//     // square the value
//     let squared = arr1[i]**2
//     // instantiate the value as a key in the obj
//     // if present, increment the value
//     // if not present, set the value to 1
//     freqCounter[squared] = (freqCounter[squared] + 1) || 1
//   }

//   // loop through the second array
//   for (let j = 0; j < arr2.length; j++) {
//     // check if the value is a key in the obj
//     if (freqCounter[arr2[j]]) {
//       // if present, decrement or delete the value
//       if (freqCounter[arr2[j]] > 1) {
//         freqCounter[arr2[j]]--
//       } else {
//         delete freqCounter[arr2[j]]
//       }
//     } else {
//       // if not present, return isSame
//       return false
//     }
//   }

//   return true
// }

// REFACTORED SOLUTION
// not ideal due to using map, every, and splice
// const same = (arr1, arr2) => {
//   return (arr1.length !== arr2.length) ? false 
//     : arr1.map((val) => val**2).every((val) => isSameFilter(val, arr2))
// }

// const isSameFilter = (val, arr2) => {
//   let isPresent = arr2.indexOf(val) !== -1
//   if (isPresent) {
//     arr2.splice(arr2.indexOf(val), 1)
//   }
//   return isPresent
// }


// SUGGESTED SOLUTION
// better for time complexity
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false
  }

  let frequencyCounter1 = {}
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  
  let frequencyCounter2 = {}
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }

  for (let key in frequencyCounter1) {
    if (!(key**2 in frequencyCounter2)) {
      return false
    }
    if (frequencyCounter2[key**2] !== frequencyCounter1[key]) {
      return false
    }
  }

  return true
}

let example1 = same([1,2,3], [4,1,9]); // true
let example2 = same([1,2,3], [1,9]); // false
let example3 = same([1,2,1], [4,4,1]); // false (must be same frequency)
let example4 = same([1,2,3,2], [9,1,4,4]); // true (must be same frequency)
let example5 = same([1,2,3,2,5], [9,1,4,4,25]); // true

console.log(example1)
console.log(example2)
console.log(example3)
console.log(example4)
console.log(example5)

/**
 * Implement a function called countUniqueValues, which accepts a sorted array,
 * and counts the unique values in the array. 
 * 
 * There can be negative numbers in the array, but it will always be sorted.
 */


// MY SOLUTION
const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0

  let leftPointer = 0
  let rightPointer = 1
  let uniqueValues = 1

  while (rightPointer < arr.length) {
    if (arr[leftPointer] !== arr[rightPointer]) {
      uniqueValues++
      leftPointer = rightPointer
    }
    rightPointer++
  }

  return uniqueValues
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])) // 4
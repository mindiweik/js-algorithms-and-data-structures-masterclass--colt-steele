// Write a function that accepts a sorted array and a value
// Create a left pointer at the start of the array, and a right pointer at the end of the array
// While the left pointer comes before the right pointer:
//  Create a pointer in the middle
//  If you find the avlue you want, return the index
//  If the value is too small, move the left pointer up
//  If the value is too large, move the right pointer down
// If you never find the value, return -1

const binarySearch = (arr, target) => {
  let left = 0
  let right = arr.length - 1
  let mid = middleCalc(left, right)

  while(arr[mid] !== target && left <= right) {
    if (arr[mid] > target) {
      right = mid - 1
    } else{
      left = mid + 1
    }
    mid = middleCalc(left, right)
  }

  return arr[mid] === target ? mid : -1
}

const middleCalc = (left, right) => {
  return Math.floor((left + right) / 2)
}

const test1 = binarySearch([1,2,3,4,5],2) // 1
const test2 = binarySearch([1,2,3,4,5],3) // 2
const test3 = binarySearch([1,2,3,4,5],5) // 4
const test4 = binarySearch([1,2,3,4,5],6) // -1
const test5 = binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10) // 2
const test6 = binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95) // 16
const test7 = binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100) // -1

console.log(test1)
console.log(test2)
console.log(test3)
console.log(test4)
console.log(test5)
console.log(test6)
console.log(test7)
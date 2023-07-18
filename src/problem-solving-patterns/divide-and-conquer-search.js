/**
 * Given a sorted array of integers, write a function called search, 
 * that accepts a value and returns the index where the value passed
 * to the function is located.
 * 
 * If the value is not found, return -1.
 */

const search = (arr, val) => {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    let middle = Math.floor((left + right) / 2)

    if (arr[middle] === val) {
      return middle
    } else if (arr[middle] < val) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }

  return -1
}

console.log(search([1, 2, 3, 4, 5, 6], 4)) // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)) // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)) // -1
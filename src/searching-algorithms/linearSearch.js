// This function accepts an array and a value
// Loop through the array and check if the current array element is equal to the value
// If it is, return the index at which the element is found
// If the value is never found, return -1

const linearSearch = (arr, target) => {
  if (arr.length === 0) return -1

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i
  }

  return -1
}

const test1 = linearSearch([10, 15, 20, 25, 30], 15) // 1
const test2 = linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
const test3 = linearSearch([100], 100) // 0
const test4 = linearSearch([1,2,3,4,5], 6) // -1
const test5 = linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // -1
const test6 = linearSearch([100], 200) // -1

console.log(test1)
console.log(test2)
console.log(test3)
console.log(test4)
console.log(test5)
console.log(test6)
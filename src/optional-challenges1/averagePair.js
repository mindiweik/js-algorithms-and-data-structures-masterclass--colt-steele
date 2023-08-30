// multiple pointers
function averagePair(arr, target) {
  if (arr.length <= 1) return false

  let left = 0
  let right = arr.length - 1
  let average

  const checkAverage = (left, right) => (left + right) / 2

  while (left < right) {
    average = checkAverage(arr[left], arr[right])

    if (average === target) {
      return true
    } else if (average > target) {
      right--
    } else {
      left++
    }
  }

  return false
}

console.log(averagePair([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)) // [1, 9] -- true
console.log(averagePair([2, 4, 6, 8, 10], 7)) // [4, 10] -- true
console.log(averagePair([6, 12, 15, 18, 26], 13)) // [12, 15] -- false
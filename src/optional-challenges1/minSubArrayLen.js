// sliding window
function minSubArrayLen(arr, target) {
  let left = 0
  let right = arr.length - 1
  let min = 0

  const sumWindow = () => {
    let sum = 0
    let newArr = []

    for (let i = left; i <= right; i++) {
      sum += arr[i]
      newArr.push(arr[i])
    }

    return { sum, newArr }
  }

    debugger
  while (right >= 0) {
    while (left <= right) {
      let sumWindowResult = sumWindow()
      let currentMin = sumWindowResult.newArr.length
      let sum = sumWindowResult.sum
      
      if (sum >= target) {
        if (min === 0 || min > currentMin) min = currentMin
      }

      left++
    }
      
    left = 0
    right--
  }

  return min
}

console.log('2', minSubArrayLen([2,3,1,2,4,3], 7)) // 2 -> because [4,3] is the smallest subarray
console.log('2', minSubArrayLen([2,1,6,5,4], 9)) // 2 -> because [5,4] is the smallest subarray
console.log('1', minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 -> because [62] is greater than 52
console.log('3', minSubArrayLen([1,4,16,22,5,7,8,9,10], 39)) // 3
console.log('5', minSubArrayLen([1,4,16,22,5,7,8,9,10], 55)) // 5
console.log('2', minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
console.log('0', minSubArrayLen([1,4,16,22,5,7,8,9,10], 95)) // 0
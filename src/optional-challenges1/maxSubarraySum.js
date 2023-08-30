// sliding window
function maxSubarraySum(arr, target) {
  // handle edge case
  if (target > arr.length) return null

  let max = 0
  let left = 0
  let right = target - 1

  while (right < arr.length) {
    let sum = 0

    for (let i = left; i <= right; i++) {
      sum += arr[i]
    }

    if (max < sum) max = sum

    left++
    right++
  }

  return max
}

console.log(maxSubarraySum([100,200,300,400], 2)) // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))  // 39 
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
console.log(maxSubarraySum([2,3], 3)) // null
const bubbleSortOptimized = (arr) => {
  let noSwaps

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      let current = arr[j]
      let next = arr[j + 1]

      if (current > next) {
        let temp = current
        arr[j] = next
        arr[j + 1] = temp

        noSwaps = false
      }
    }
    
    if (noSwaps) break
  }

  return arr
}

let test = [5, 3, 4, 1, 2]
let test1 = [8, 12, 5, 18, 22]

console.log(bubbleSortOptimized(test))
console.log(bubbleSortOptimized(test1))
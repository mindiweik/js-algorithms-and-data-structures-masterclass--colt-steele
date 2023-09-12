const flatten = (arr) => {
  let result = []

  const helper = (arr) => {
    // base case
    if (arr.length === 0) return

    // recursive case
    if (!Array.isArray(arr[0])) {
      result.push(arr[0])
    } else {
      helper(arr[0])
    }

    helper(arr.slice(1))
  }

  helper(arr)

  return result
}

const test1 = flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
const test2 = flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
const test3 = flatten([[1],[2],[3]]) // [1,2,3]
const test4 = flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

console.log(test1)
console.log(test2)
console.log(test3)
console.log(test4)
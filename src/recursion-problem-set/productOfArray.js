const productOfArray = (arr) => {
  if (arr.length === 0) return 1  

  return arr[0] * productOfArray(arr.slice(1))
}

const test1 = productOfArray([1,2,3]) // 6
const test2 = productOfArray([1,2,3,10]) // 60

console.log(test1)
console.log(test2)
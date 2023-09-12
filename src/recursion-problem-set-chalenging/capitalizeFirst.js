const capitalizeFirst = (arr) => {
  if (arr.length === 0) return []

  let word = arr[0]
  let first = word.charAt(0)
  let rest = word.substring(1)
  first = first.toUpperCase()
  word = first + rest

  return [word].concat(capitalizeFirst(arr.slice(1)))
}

const test = capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

console.log(test)

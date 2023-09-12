const capitalizeWords = (wordArr) => {
  if (wordArr.length === 0) return []

  let word = wordArr[0].toUpperCase()

  return [word].concat(capitalizeWords(wordArr.slice(1)))
}

let words = ['i', 'am', 'learning', 'recursion'];
const test1 = capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

console.log(test1)
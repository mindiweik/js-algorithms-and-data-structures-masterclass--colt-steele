const isPalindrome = (str) => {
  // base case
  // no more letters in the string
  if (str.length <= 1) return true
  // return true

  // recursive case
  // check if the first and last letters match
  let first = str[0]
  let last = str[str.length - 1]

  // if not, return false
  // otherwise, recurse
  if (first === last) {
    return isPalindrome(str.substring(1, str.length - 1))
  } else {
    return false
  }
}

const test1 = isPalindrome('awesome') // false
const test2 = isPalindrome('foobar') // false
const test3 = isPalindrome('tacocat') // true
const test4 = isPalindrome('amanaplanacanalpanama') // true
const test5 = isPalindrome('amanaplanacanalpandemonium') // false

console.log(test1)
console.log(test2)
console.log(test3)
console.log(test4)
console.log(test5)
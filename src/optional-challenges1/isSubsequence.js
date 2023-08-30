// multiple pointers
function isSubsequence(possibleSubString, fullString) {
  // edge case
  if (!possibleSubString) return true
  
  // possibleSubString checker
  let left = 0
  // fullString checker
  let right = 0
  let leftChar, rightChar

  const charChecker = (char1, char2) => char1 === char2

  while (right < fullString.length) {
    leftChar = possibleSubString[left]
    rightChar = fullString[right]

    if (charChecker(leftChar, rightChar)) {
      left++
      right++
      if (left === possibleSubString.length) return true
    } else {
      right++
    }
  }

  return false
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
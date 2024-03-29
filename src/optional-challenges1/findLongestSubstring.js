// sliding window
function findLongestSubstring(str) {
  let left = 0
  let right = left
  let max = 0

  while (left < str.length) {
    let current = []
    while (right < str.length) {
      if (!current.includes(str[right])) {
        current.push(str[right])
      } else {
        break
      }
      right++
    }
    if (max < current.length) max = current.length
    left++
    right = left
  }

  return max
}

console.log('0', findLongestSubstring('')) // 0
console.log('7', findLongestSubstring('rithmschool')) // 7
console.log('6', findLongestSubstring('thisisawesome')) // 6
console.log('7', findLongestSubstring('thecatinthehat')) // 7
console.log('1', findLongestSubstring('bbbbbb')) // 1
console.log('8', findLongestSubstring('longestsubstring')) // 8
console.log('6', findLongestSubstring('thisishowwedoit')) // 6
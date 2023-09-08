const reverse = (str) => {
  let result = ''

  const helper = (remainingStr) => {
    if (remainingStr.length === 0) return

    let end = remainingStr.length - 1

    result += remainingStr[end]
    helper(remainingStr.substring(0,end))
  }

  helper(str)

  return result
}

const test1 = reverse('awesome') // 'emosewa'
const test2 = reverse('rithmschool') // 'loohcsmhtir'

console.log(test1)
console.log(test2)
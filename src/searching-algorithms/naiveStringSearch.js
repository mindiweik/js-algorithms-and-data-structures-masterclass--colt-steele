const stringSearch = (long, short) => {
  let matches = 0

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      const iCheck = long[i + j]
      const jCheck = short[j]

      if (jCheck !== iCheck) break
      if (j === short.length - 1) matches++
    }
  }

  return matches
}

const test = 'wowomgzomg'

console.log(stringSearch(test, 'omg')) // 2
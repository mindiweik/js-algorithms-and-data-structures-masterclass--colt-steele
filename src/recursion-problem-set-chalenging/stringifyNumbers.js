const stringifyNumbers = (obj) => {
  let keys = Object.keys(obj)
  if (keys.length === 0) return

  let helperObj = {}
      
  for (let i = 0; i < keys.length; i++) {
    let current = obj[keys[i]]

    if (isNum(current)) {
      helperObj[keys[i]] = current.toString()
    } else if (typeof current === 'object' && !Array.isArray(current)) {
      helperObj[keys[i]] = stringifyNumbers(current)  
    } else {
      helperObj[keys[i]] = current
    }
  }

  return helperObj
}

const isNum = input => typeof input === 'number'

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

const test1 = stringifyNumbers(obj)
console.log(test1)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
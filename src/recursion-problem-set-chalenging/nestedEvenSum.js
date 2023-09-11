const nestedEvenSum = (object) => {
  let sum = 0

  const helper = (obj) => {
    let keys = Object.keys(obj)

    if (keys.length === 0) return

    for (let i = 0; i < keys.length; i++) {
      const current = obj[keys[i]]
      if (isNum(current)) {
        if (isEven(current)) {
          sum += current
        }
      } else if (typeof current === 'object' && typeof current !== null) {
        helper(current)
      }
    }
  }

  helper(object)

  return sum
}

const isNum = input => typeof input === 'number'
const isEven = num => num % 2 === 0

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

const test1 = nestedEvenSum(obj1); // 6
const test2 = nestedEvenSum(obj2); // 10

console.log(test1)
console.log(test2)
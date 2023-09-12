const collectStrings = (object) => {
  let result = []

  const helper = (obj) => {
    let keys = Object.keys(obj)
    if (keys.length === 0) return

    for (let i = 0; i < keys.length; i++) {
      let current = obj[keys[i]]
      if (typeof current === 'string') {
        result.push(current)
      } else if (typeof current === 'object' && !Array.isArray(current)) {
        helper(current)
      }
    }
  }

  helper(object)

  return result
}

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

const test1 = collectStrings(obj) // ["foo", "bar", "baz"])

console.log(test1)
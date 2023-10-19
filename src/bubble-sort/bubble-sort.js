const bubbleSort = (arr) => {
  let lengthToSort = arr.length - 1

  while (lengthToSort > 0) {
    for (let i = 0; i < lengthToSort; i++) {
      let current = i
      let next = i + 1

      if (arr[current] > arr[next]) {
        let temp = arr[current]
        arr[current] = arr[next]
        arr[next] = temp
      }  
    }

    lengthToSort--
  }

  return arr
}

let test = [5, 3, 4, 1, 2]
let test1 = [8, 12, 5, 18, 22]

console.log(bubbleSort(test))
console.log(bubbleSort(test1))
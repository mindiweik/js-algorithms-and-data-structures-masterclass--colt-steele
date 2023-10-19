const selectionSort = (arr) => {
  let index = 0
  let minIndex

  while (index < arr.length) {
    minIndex = index

    for (let i = index; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i
      }
    }

    if (minIndex !== index) {
      let temp = arr[minIndex]
      arr[minIndex] = arr[index]
      arr[index] = temp
    }

    index++
  }

  return arr
}

let test = [5, 3, 4, 1, 2]
let test1 = [8, 12, 5, 18, 22]

console.log(selectionSort(test))
console.log(selectionSort(test1))
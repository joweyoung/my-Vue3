function quickSort(arr) {
  if (!Array.isArray(arr)) {
    throw TypeError('type must be Array')
  }
  if (arr.length < 2) {
    return arr
  }

  const midIndex = Math.floor(arr.length / 2)
  const midValue = arr.splice(midIndex, 1)[0]

  const left = []
  const right = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > midValue) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }
  return quickSort(left).concat([midValue], quickSort(right))
}

export { quickSort }

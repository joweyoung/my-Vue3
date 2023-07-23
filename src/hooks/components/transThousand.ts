const thousandTans = (num: number) => {
  const str = num + ''
  let newStr = ''
  let dotStr = ''
  const dotIndex = str.indexOf('.')
  console.log(dotIndex)
  if (dotIndex > -1) {
    dotStr = str.slice(dotIndex)
    newStr = str.slice(0, dotIndex)
  } else {
    newStr = str
  }
  const arr = Array.from(newStr).reverse()

  const newArr: any = []
  arr.forEach((n, i) => {
    if (i % 3 === 0 && i !== 0) {
      newArr.push(',')
      newArr.push(n)
    } else {
      newArr.push(n)
    }
  })
  newStr = newArr.reverse().join('')
  const sumStr = newStr + dotStr
  return {
    sumStr
  }
}

export { thousandTans }

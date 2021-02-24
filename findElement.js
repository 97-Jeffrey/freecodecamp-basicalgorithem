function findElement(arr, func) {
  for(let each of arr){
    if (func(each)){
      return each
    }
  }
  return undefined
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
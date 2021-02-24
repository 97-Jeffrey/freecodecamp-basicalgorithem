function largestOfFour(arr) {
  
  let output = [];
  for(let i = 0; i<arr.length; i++){
    let maxVal = Math.max(...arr[i])
    output.push(maxVal)
  }

  return output;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
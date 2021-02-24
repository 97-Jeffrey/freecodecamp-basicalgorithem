function chunkArrayInGroups(arr, size) {
  let output = []
  while(arr.length>0){
    output.push(arr.splice(0,size))
  }
  return output;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))

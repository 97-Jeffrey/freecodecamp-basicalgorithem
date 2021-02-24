function findLongestWordLength(str) {
  let maxLength = 0;
  str = str.split(" ");
  for(let each of str){
    if(each.length>maxLength){
      maxLength = each.length
    }
  }
  return maxLength
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

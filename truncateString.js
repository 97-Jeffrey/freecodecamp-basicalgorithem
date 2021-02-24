function truncateString(str, num) {
  if(num >= str.length){
    return str;
  }

  let output = "";

  output  = str.slice(0, num) + "..."

  return output;
}

console.log(truncateString("A-", 1));
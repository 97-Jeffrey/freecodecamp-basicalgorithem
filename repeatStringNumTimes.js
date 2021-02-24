function repeatStringNumTimes(str, num) {
  if(num<1){
    return " ";
  }
  let output = "";
  for(let i=0; i<num; i++){
    output += str
  }
  return output;
}
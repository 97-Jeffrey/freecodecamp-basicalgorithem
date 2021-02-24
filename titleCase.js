function titleCase(str) {
  let output = "";
  output += str[0].toUpperCase()
  for(let i=1; i<str.length; i++){
    if(str[i-1] ==" "){
      output += str[i].toUpperCase()
    }else{
      output += str[i].toLowerCase()
    } 
  }
  return output

}

console.log(titleCase("I'm a little tea pot"));

function factorialize(num) {
  let output = num;
  while(num !==1){
    output = output * (num-1)
    num-=1
  }
  return output
}

console.log(factorialize(5));
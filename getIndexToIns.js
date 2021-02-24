function getIndexToIns(arr, num) {
  let arr1 = arr.sort((a,b)=>a-b)

  if(!arr.length) return 0
  if(num<=arr[0]) return 0;
  if(num>=arr[arr.length-1]) return arr.length
  for(let i=0;i<arr1.length; i++){
    if(num<=arr[i+1] && num>=arr[i]){
      return i+1
    }

  }

}
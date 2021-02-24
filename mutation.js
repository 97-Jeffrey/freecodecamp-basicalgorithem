function mutation(arr) {
 let map={}
 let first = arr[0], second = arr[1];
 for(let i=0; i<first.length; i++){
   map[first[i]] = true
   map[first[i].toUpperCase()] =true
   map[first[i].toLowerCase()] =true
 }
 console.log(map)

 for(let i= 0; i<second.length; i++){
   if(!map[second[i]] || !map[second[i].toUpperCase()] || !map[second[i].toUpperCase()]) return false
 }

 return true
}

console.log(mutation(["Mary", "Aarmy"]));
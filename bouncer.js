function bouncer(arr) {
  let falsy = [false, null, 0, "", undefined, NaN];
  return arr.filter(each=>!falsy.includes(each));
}
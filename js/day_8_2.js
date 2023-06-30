function myMap(array, func) {
  let outArray = [];
  for (let i of array) {
    outArray.push(func(i));
  }
  return outArray;
}

let a = myMap([1, 2, 3], (number) => number * 2);
console.log(a);

function findSmallestNum(arr) {
  let smallest = +Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}
let arr = [12, 2, 34, 6, 9, 11];

console.log(findSmallestNum(arr));

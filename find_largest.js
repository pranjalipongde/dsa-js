function findLargest(arr) {
  let largest = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

let arr = [12, 2, 34, 6, 9, 11];
console.log(findLargest(arr));

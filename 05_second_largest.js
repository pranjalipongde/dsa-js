function secondLargest(arr) {
  let fisrtLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > fisrtLargest) {
      secondLargest = fisrtLargest;
      fisrtLargest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

let arr = [1, 2, 3, -4, 5];
console.log(secondLargest(arr));

//search element from the array and retunr index and if no element present return -1

let arr = [12, 2, 34, 6, 9, 11];

function searchElement(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      return i;
    }
  }
  return -1;
}

console.log(searchElement(arr, 34));

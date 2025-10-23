function removeDuplicatesSorted(nums) {
  let x = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x = x + 1;
      nums[x] = nums[i];
    }
  }
  // return x + 1;
  return nums.slice(0, x + 1); // return the array of unique elements
}

console.log(removeDuplicatesSorted([1, 1, 2]));
console.log(removeDuplicatesSorted([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

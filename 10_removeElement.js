function removeElement(nums, val) {
  let x = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[x] = nums[i];
      x++;
    }
  }
  return nums.slice(0, x);
}

console.log(removeElement([3, 2, 2, 3], 3));

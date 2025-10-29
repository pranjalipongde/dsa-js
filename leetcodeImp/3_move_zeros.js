function moveZeros(nums) {
  let p = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[p] = nums[i];
      p++;
    }
  }

  //fill rest with zero
  for (let i = p; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}

console.log(moveZeros([0, 1, 0, 3, 12]));
console.log(moveZeros([0, 0, 1]));
console.log(moveZeros([0]));

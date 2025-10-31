function findMissingNum(nums) {
  let n = nums.length;
  let totalSum = (n * (n + 1)) / 2;

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum = sum + nums[i];
  }

  return totalSum - sum;
}

console.log(findMissingNum([3, 0, 1]));
console.log(findMissingNum([0, 1]));

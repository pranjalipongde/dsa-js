function singleNumber(nums) {
  //   let hash = {};

  //   for (let i = 0; i < nums.length; i++) {
  //     if (!hash[nums[i]]) {
  //       hash[nums[i]] = 1;
  //     } else {
  //       hash[nums[i]]++;
  //     }
  //   }

  //   for (let i = 0; i < nums.length; i++) {
  //     if (hash[nums[i]] == 1) {
  //       return nums[i];
  //     }
  //   }

  let xor = 0;

  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }

  return xor;
}

console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([2, 2, 1]));

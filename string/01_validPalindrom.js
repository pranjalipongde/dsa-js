var isPalindrome = function (s) {
  let clearStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  //2 pointer
  let left = 0;
  let right = clearStr.length - 1;

  while (left < right) {
    if (clearStr[left] !== clearStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));

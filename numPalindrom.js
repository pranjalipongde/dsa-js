function isPalindrome(num) {
  if (num < 0) return false;

  let numCopy = num;
  let rev = 0;

  while (num > 0) {
    let rem = num % 10; //to get last digit
    rev = rev * 10 + rem; //to add the last digit to the reverse number

    num = Math.floor(num / 10); //remove last digit
  }

  if (rev === numCopy) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome(-121));

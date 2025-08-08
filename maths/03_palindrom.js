//n=4554 -> 4554 is a palindrome

function isPalindrome(n) {
  let revNum = 0;
  let dup = n;

  while (n > 0) {
    let ld = n % 10;
    revNum = revNum * 10 + ld;
    n = Math.floor(n / 10);
  }

  if (revNum === dup) {
    console.log(`${dup} is a palindrome`);
  } else {
    console.log(`${dup} is not a palindrome`);
  }
}

isPalindrome(121);
isPalindrome(123);

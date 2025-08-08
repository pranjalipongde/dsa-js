// reverse num and if it has zero ignore it
// n =12345 then output is 54321
// n = 10400 then output is 401

function reverseNum(n) {
  let revNum = 0;

  while (n > 0) {
    let lastDigit = n % 10;
    revNum = revNum * 10 + lastDigit;
    n = Math.floor(n / 10);
  }
  console.log(revNum);
}

reverseNum(12345); // Output: 54321
reverseNum(10400); // Output: 401

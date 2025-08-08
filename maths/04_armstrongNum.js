//An Amrstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

// For example, 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 153.

function isArmstrong(n) {
  let sum = 0;
  let dup = n;

  while (n > 0) {
    let ld = n % 10;
    sum = sum + Math.pow(ld, 3);
    n = Math.floor(n / 10);
  }

  if (sum === dup) {
    console.log(`${dup} is an Armstrong number`);
  } else {
    console.log(`${dup} is not an Armstrong number`);
  }
}

isArmstrong(153);

function reverInteger(x) {
  let xCopy = x;

  let rev = 0;

  x = Math.abs(x);

  while (x > 0) {
    let digit = x % 10;
    rev = rev * 10 + digit;
    x = Math.floor(x / 10);
  }

  //for limit 2^31
  let limit = Math.pow(2, 31);
  if (rev > limit - 1 || rev < -limit) {
    return 0;
  }
  return xCopy < 0 ? -rev : rev;
}

console.log(reverInteger(123));
console.log(reverInteger(-123));
console.log(reverInteger(120));
console.log(reverInteger(0));

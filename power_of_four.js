function powerOfFour(n) {
  if (n <= 0) return false;

  while (n % 4 === 0) {
    n = n / 4;
  }

  return n === 1;
}

console.log(powerOfFour(16));
console.log(powerOfFour(34));
console.log(powerOfFour(0));

// n=36 -> [1,2,3,4,6,9,12,18,36]

function printDivisors(n) {
  let divisors = [];

  //   for (let i = 0; i <= n; i++) {
  //     if (n % i == 0) {
  //       divisors.push(i);
  //     }
  //   }

  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);

      if (i !== n / i) {
        divisors.push(n / i);
      }
    }
  }
  divisors.sort((a, b) => a - b); // Sort the divisors in ascending order
  console.log(divisors);
}

printDivisors(6); // Output: [1, 2, 3, 4, 6, 9, 12, 18, 36]

let n = 45678;
let count = 0;

// function countDigits(n) {
//   while (n > 0) {
//     n = Math.floor(n / 10);
//     count++;
//   }
//   return count;
// } //whitout any corner cases

function countDigits(n) {
  if (n == 0) return 1; //corner case for 0

  n = Math.abs(n); //corner case for negative numbers

  let count = 0;

  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

console.log(countDigits(-234667));

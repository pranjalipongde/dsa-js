// if n = 12345 then output is 5

function countDigit(n) {
  //   let count = 0;
  //   while (n > 0) {
  //     count = count + 1;
  //     n = Math.floor(n / 10);
  //   }

  //or

  let count = Math.floor(Math.log10(n) + 1);
  console.log(count);
}

countDigit(12345);

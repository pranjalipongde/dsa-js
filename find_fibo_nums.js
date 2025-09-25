function findFiboNums(n) {
  let fib = [];

  if (n === 0) return [];
  if (n === 1) return [0];

  fib.push(0, 1);

  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }

  return fib;
}

findFiboNums(5);

console.log(findFiboNums(5));
console.log(findFiboNums(0));
console.log(findFiboNums(1));
console.log(findFiboNums(10));

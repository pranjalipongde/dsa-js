function makeCounter(initialValue = 0) {
  let current = initialValue;
  //   let initial = initialValue;

  return {
    increment() {
      current += 1;
      return current;
    },
    decrement() {
      current -= 1;
      return current;
    },
    reset() {
      current = initialValue;
      return current;
    },
  };
}

let counter = makeCounter(10);
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());

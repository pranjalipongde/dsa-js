function formLargestNumber(arr) {
  //cover number into string

  const strNums = [];
  for (let i = 0; i < arr.length; i++) {
    strNums[i] = String(arr[i]);
  }

  //bubble sort ab vs ba
  let n = strNums.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      const a = strNums[j];
      const b = strNums[j + 1];
      const ab = a + b;
      const ba = b + a;

      if (ba > ab) {
        const temp = strNums[j];
        strNums[j] = strNums[j + 1];
        strNums[j + 1] = temp;
      }
    }
  }

  //concat
  let result = "";
  for (let i = 0; i < strNums.length; i++) {
    result += strNums[i];
  }

  //edge case
  if (result[0] === "0") {
    return "0";
  }

  return result;
}

const input = [3, 30, 34, 5, 9];
console.log(formLargestNumber(input));

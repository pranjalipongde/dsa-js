let arr = [1, 3, 3, 5, 6, 6, 9, 2, 2];

function removeDuplicates(arr) {
  let unique = [];

  if (arr.length === 0) return [];

  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

const result = removeDuplicates([true, false, false]);
console.log(result);

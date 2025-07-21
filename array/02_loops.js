let arr = [1, 2, 3, 4, 5, 6];

// Using forEach to iterate over the array
arr.forEach((index) => {
  console.log(index);
});

//for...of
for (const i of arr) {
  console.log(i);
}

//for...in
for (let i in arr) {
  console.log(arr[i]);
}

//for loop

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//using map
arr.map((i) => {
  console.log(i);
});

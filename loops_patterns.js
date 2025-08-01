// ****
// ****
// ****
// ****

let n = 6;

for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j < n; j++) {
    row += "* ";
  }
  console.log(row);
}

// *
// * *
// * * *
// * * * *
// * * * * *

for (i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j <= i; j++) {
    row += j + 1 + " ";
  }
  console.log(row);
}

//  1
//  2 2
//  3 3 3
//  4 4 4 4
//  5 5 5 5 5
//  6 6 6 6 6 6

for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j <= i; j++) {
    row += i + 1 + " ";
  }
  console.log(row);
}

//  * * * * * * *
//  * * * * * *
//  * * * * *
//  * * * *
//  * * *
//  * *
//  *

for (let i = 0; i <= n; i++) {
  let row = " ";
  for (let j = 0; j < n - i + 1; j++) {
    row += "* ";
  }
  console.log(row);
}

// 1 2 3 4 5 6
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 1; j < n - i + 1; j++) {
    row += j + " ";
  }
  console.log(row);
}

//        *
//       ***
//      *****
//     *******
//    *********
//   ***********
//  *************

for (let i = 0; i <= n; i++) {
  let row = "";

  // space
  for (let j = 0; j < n - i + 1; j++) {
    row += " ";
  }

  // stars
  for (let j = 0; j < 2 * i + 1; j++) {
    row += "*";
  }

  // space
  for (let j = 0; j < n - i + 1; j++) {
    row += " ";
  }
  console.log(row);
}

//  *************
//   ***********
//    *********
//     *******
//      *****
//       ***
//        *

for (let i = 0; i <= n; i++) {
  let row = "";

  // space
  for (let j = 0; j <= i; j++) {
    row += " ";
  }

  // stars
  for (let j = 0; j < 2 * (n - i) + 1; j++) {
    row += "*";
  }

  // space
  for (let j = 0; j <= i; j++) {
    row += " ";
  }
  console.log(row);
}

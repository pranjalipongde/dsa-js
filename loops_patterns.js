// ****
// ****
// ****
// ****

let n = 5;

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

//        *
//       ***
//      *****
//     *******
//    *********
//   ***********
//  *************
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

for (let i = 0; i <= 2 * n - 1; i++) {
  let row = "";
  let stars = i;

  if (i > n) {
    stars = 2 * n - i;
  }

  for (let j = 0; j < stars; j++) {
    row += "* ";
  }
  console.log(row);
}

// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1
// 0 1 0 1 0 1

let start = 1;
for (let i = 0; i < n; i++) {
  let row = "";

  if (i % 2 === 0) {
    start = 1;
  } else {
    start = 0;
  }

  for (let j = 0; j <= i; j++) {
    row += start + " ";
    start = 1 - start;
  }

  console.log(row);
}

// 1       1
// 12     21
// 123   321
// 1234 4321
// 1234554321

let space = 2 * (n - 1);
for (let i = 0; i <= n; i++) {
  let row = "";

  //numers
  for (let j = 1; j <= i; j++) {
    row += j;
  }

  //space
  for (let j = 0; j <= space; j++) {
    row += " ";
  }

  //numbers
  for (let j = i; j >= 1; j--) {
    row += j;
  }

  console.log(row);
  space -= 2;
}

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15
let num = 1;
for (let i = 0; i <= n; i++) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row += num + " ";
    num = num + 1;
  }

  console.log(row);
}

// A
// A B
// A B C
// A B C D
// A B C D E
for (let i = 0; i <= n; i++) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row += String.fromCharCode(65 + j) + " ";
  }
  console.log(row);
}

//or

for (let i = 0; i <= n; i++) {
  let row = "";

  for (let ch = 65; ch <= 65 + i; ch++) {
    row += String.fromCharCode(ch) + " ";
  }
  console.log(row);
}

// A B C D E
// A B C D
// A B C
// A B
// A

for (let i = 0; i <= n; i++) {
  let row = "";
  for (let j = 0; j < n - i + 1; j++) {
    row += String.fromCharCode(65 + j) + " ";
  }
  console.log(row);
}
//or
for (let i = 0; i <= n; i++) {
  let row = "";
  for (let ch = 65; ch < 65 + n - i; ch++) {
    row += String.fromCharCode(ch) + " ";
  }
  console.log(row);
}

// A
// B B
// C C C
// D D D D
// E E E E E

for (let i = 0; i <= n; i++) {
  let row = "";
  let ch = String.fromCharCode(65 + i);

  for (let j = 0; j <= i; j++) {
    row += ch + "";
  }
  console.log(row);
}

for (let i = 0; i <= n; i++) {
  let row = "";

  //space
  for (let j = 0; j <= n - i - 1; j++) {
    row += " ";
  }

  //letters

  let ch = 65; // ASCII for 'A'
  let breakpoint = Math.floor((2 * i + 1) / 2);

  for (let j = 0; j < 2 * i + 1; j++) {
    row += String.fromCharCode(ch);

    if (j < breakpoint) {
      ch++;
    } else {
      ch--;
    }
  }

  console.log(row);
}

// node loops_patterns.js

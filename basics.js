//   sum of integers

let a = 10;
let b = 20;
console.log(a + b);

// string and number
console.log(10 + 1); //11
console.log("10" + 1); //101   -> string concatenation
console.log("10" + "1");
// "101" -> string concatenation

// check typeOf

console.log(typeof (a + b)); //number

// imp

console.log("sum of 10 & 20 is " + a + b); //sum of 10 & 20 is 1020

console.log("sum of 10 & 20 is " + (a + b)); //sum of 10 & 20 is 30

// imp
console.log("1" + 1); //11
console.log("1" - 1); //0 -> string to number conversion
console.log("1" * 1); //1 -> string to number conversion

// how to take value from user

// let age = prompt("ENTER YOUR AGE");
// console.log(age);
// console.log(typeof age); //string

// swapping
//1
let a1 = 10;
let b1 = 20;
let c1;

c1 = a1;
a1 = b1;
b1 = c1;

console.log(a1, b1); //20 10

//2
let a2 = 20,
  b2 = 30;

a2 = a2 + b2; //50;
b2 = a2 - b2; //50-30 -> 20
a2 = a2 - b2; // 50-20 -> 30

console.log(a2, b2);

//destructuring assignment
[a2, b2] = [b2, a2];
console.log(a2, b2);

// uniary operator
//  ++  --  -> pre and post

let a3 = 10;
let b3 = a3++; // 1st it will take original vlaue and then update it

console.log(a3); //11
console.log(b3); // 10

a3 = ++b3;
console.log(b3); // pre -> update value immdiately

// example

let d = 11,
  e = 22;

let f = d + e + d++ + e++ + ++d + ++e; // 11 + 22 + 11 (when it is use it  will 12)+ 22(when use it is 23)+ 13 + 24 => 103
console.log(d); // 13
console.log(e); //24
console.log(f); //103

let e1 = true;
e1++;
console.log(e1); // 2  -> true = 1 ;  1++ -> 2

// let e2 = 11++;
// console.log(e2);  // error

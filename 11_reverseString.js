function reverseString(s) {
  let length = s.length;
  let halfleng = Math.floor(length / 2);

  for (let i = 0; i < halfleng; i++) {
    //swapping
    let temp = s[i];
    s[i] = s[length - 1 - i];
    s[length - 1 - i] = temp;
  }

  return s;
}

console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["H", "a", "n", "n", "a", "h"]));

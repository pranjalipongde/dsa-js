function validateStringPalindrome(str) {
  const cases = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  const reversed = cases.split("").reverse().join("");

  return cases === reversed;
}

console.log(validateStringPalindrome("A man, a plan, a canal: Panama"));
console.log(validateStringPalindrome("1234"));
console.log(validateStringPalindrome(""));

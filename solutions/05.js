// 5 rotate the string
// first way
let str = "w3resource";

let sr = 0;
for (let i = 0; i < str.length; i++) {
  sr = str.charAt(str.length - 1) + str.substring(0, str.length - 1);
  str = sr;
  console.log(sr);
}

// second way
let str = "w3resource";
let n = 0;
let sr = "";

function rotateString(e) {
  n = e % str.length;
  str = str.substring(n, str.length) + str.substring(0, n);
  return str;
}
const printOut = rotateString(23);
console.log(printOut);

/* function analyzeNumber(inputNumber, randomNumber) {
  return inputNumber == randomNumber
    ? alert("Good work")
    : alert("Not matched");
}

let inputNumber = prompt("Guess a number between 1 and 10");
let randomNumber = Math.trunc(Math.random() * 10 + 1);
analyzeNumber(inputNumber, randomNumber);
 */

function analyzeNum(imputNum, randomNum) {
  if (imputNum != randomNum) {
    prompt("Wrong Number, keep guessing");
  } else {
    alert("Good work");
  }
}
let inputNumber = prompt("Guess a number between 1 and 10");
let randomNumber = Math.trunc(Math.random() * 10 + 1);
analyzeNum(inputNumber, randomNumber);

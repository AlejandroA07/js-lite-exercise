function analyzeNumber(inputNumber, randomNumber) {
  return inputNumber == randomNumber
    ? alert("Good work")
    : alert("Not matched");
}

let inputNumber = prompt("Guess a number between 1 and 10");
let randomNumber = Math.trunc(Math.random() * 10 + 1);
analyzeNumber(inputNumber, randomNumber);
4;

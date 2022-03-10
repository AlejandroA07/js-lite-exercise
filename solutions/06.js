// 6 Leap year gregorian calender
let test = 1700 % 4;
let test2 = 1700 % 100;
console.log(test2);
function leapYear(e) {
  if (e % 4 === 0 || e % 400 === 0) {
    if (e % 100 === 0) {
      if (e % 400 === 0) {
        return `${e} is a leap year`;
      } else {
        return `${e} is not a leap year`;
      }
    }
  } else {
    return `${e} is not a leap year`;
  }
}

console.log(leapYear(1600));

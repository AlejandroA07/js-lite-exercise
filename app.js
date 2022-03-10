"use strict";
// Date and Time
/* const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

const now = new Date();
const dayNr = now.getDay();
const weekDay = days[dayNr];

const dayStr = "today is: " + weekDay;
console.log(dayStr);

const [hour, minutes, seconds] = [
  now.getHours(),
  now.getMinutes(),
  now.getSeconds(),
];

function addZeroToTime(e) {
  return e.toString().padStart(2, "0");
}

function computeAmPm(hour) {
  return hour < 12 ? "AM" : "PM";
}

const dd = addZeroToTime(now.getDate());
const mm = addZeroToTime(now.getMonth());
const yy = now.getFullYear();
const hh = addZeroToTime(hour);
const min = addZeroToTime(minutes);
const ss = addZeroToTime(seconds);

function kTime(hour, minutes, seconds) {
  const AmPm = computeAmPm(hour);
  console.log(`Current time is : ${hh} ${AmPm} : ${min} : ${ss}`);
}
kTime(hour, minutes, seconds);
console.log(`${dd}/${mm}/${yy}`);
//br
//br
// Triangle Area
function calcSemiPerimeter(a, b, c) {
  return (a + b + c) / 2;
}

const s = calcSemiPerimeter(5, 6, 7);
function calcArea(a, b, c) {
  const area = Math.trunc(Math.sqrt(s * (s - a) * (s - b) * (s - c)));
  return area;
}
console.log(calcArea(5, 6, 7) + " m^2");
console.log();
//br
//br
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

//br
//br
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

console.log(leapYear(1600)); */

//br
//br
// 8 Guess number

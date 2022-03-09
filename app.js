"use strict";
// print out Time
const days = [
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

const hH = addZeroToTime(hour);
const mM = addZeroToTime(minutes);
const sS = addZeroToTime(seconds);

function kTime(hour, minutes, seconds) {
  const AmPm = computeAmPm(hour);
  console.log(`Current time is : ${hH} ${AmPm} : ${mM} : ${sS}`);
}
kTime(hour, minutes, seconds);

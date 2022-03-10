// Date and Time
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

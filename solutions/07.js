// 1990 - 2020

const sundayIndex = 0; // variable explicativa;
// const matchingDates = [];

/*
const date = new Date('1000-01-01');
for(let year = 2000; year <= 2020; year++) {
	date.setFullYear(year);
  const dayIndex = date.getDay();
  if (dayIndex === sundayIndex) {
    matchingDates.push(new Date(date));
  }
}
*/

/*
for(let year = 2000; year <= 2020; year++) {
	const date = new Date(`${year}-01-01`);
  const dayIndex = date.getDay();
  if (dayIndex === sundayIndex) {
    matchingDates.push(date);
  }
}
*/

// Wont work as expected
/*
const date = new Date('1000-01-01');
for(let year = 2000; year <= 2020; year++) {
	date.setFullYear(year);
  const dayIndex = date.getDay();
  if (dayIndex === sundayIndex) {
    matchingDates.push(date);
  }
}
*/

function findJanFirstSundays(fromYear, toYear) {
  const matchingDates = [];
  for (let year = fromYear; year <= toYear; year++) {
    const date = new Date(`${year}-01-01`);
    const dayIndex = date.getDay();
    if (dayIndex === sundayIndex) {
      matchingDates.push(date);
    }
  }
  return matchingDates;
}

function printDateArray(dates) {
  for (const date of dates) {
    console.log(date.toString());
  }
}

const dates = findJanFirstSundays(2000, 2020);
printDateArray(dates);

//matchingDates.forEach(date => console.log(date.toString()));

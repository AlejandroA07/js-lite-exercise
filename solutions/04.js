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

function getTriangleArea(a, h) {
	if ((!a && a <= 0) || (!h || h <= 0)) {
  	return "Nieprawidłowe dane";
  }
  
  return a * h / 2;
}

console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(12, 13);
var triangle3Area = getTriangleArea(14, 11);

console.log('triangle1Area', triangle1Area);
console.log('triangle2Area', triangle2Area);
console.log('triangle3Area', triangle3Area);

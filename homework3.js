
console.log ("Homework 3")

alert ("Hi there")

console.log ("Function 1")

const F1 = function (a, b, c) {
	return a * b - c
};
const z = F1(5, 10, 22);
console.log(z);


console.log ("Function 2")

const F2 = function () {
  const x = 2;
    const y = 3;
    const c = x * y;;
    return c;
};
const y = F2()
console.log (y);


console.log ("Function 3")

const F3 = function (number1, number2, number3) {
	const A = number1 + (number2 * number3 -number1) / number2;
  console.log (A);
};
(F3 (4,2,9));


console.log ("Function 4")

const F4 = function (d, e, g) {
	if ((d.length > e.length) && (d.length > g.length)) {
		return d;
	}	else if ((e.length > d.length) && (e.length > g.length)) {
		return e;
		} else {
			return g;
		};
};
const y = F4("Titanic", "Kate", "movie")
console.log(y)


console.log ("Function 5")

const F5 = function (a, b) {
	if (a === b) {
		return 0;
	} else if (a > b) {
		return 1;
		} else {
			return -1;
		};
};
const p = F5(5, 10);
console.log(p);


console.log ("Function 6")

const F6 = function (a, b) {
	return a*b;
};
const t = F6(5, 10);
console.log (F6(5, 10));


console.log ("Function 7")

const F7 = function (a, b) {
	return b/a;
};
console.log (F7(5, 10));


console.log ("Function 8")

const triangleArea = function(base, height) {
  const TA1 = F6(base, height)
  const TA2 = F7(2, TA1)
  return TA2;
};
const r = triangleArea(4, 8);
console.log (r);


console.log ("Function 9")

const numLength = function (a){
	const alfa = a + "";
	return alfa.length;
};
const three = numLength(777);
console.log (three);


console.log ("Function 10")

const compLength = function (str1, str2, number1){
	const a = number1 + "";
	if ((str1.length + str2.length) > a.length){
		return 1;
	} 	else {
		return -1
	};
};
const b = compLength("book", "pen", 2018);
console.log (b);


console.log ("Function 11")

const runStuff = function (number1, number2, str1){
	if (str1 === "rectangle"){
		return number1 * number2;
	} else if (str1 === "triangle") {
		return triangleArea(number1, number2);
	} else {
		return -1;
	};
};
const RS = runStuff(4, 6, "triangle");
console.log (RS);
	







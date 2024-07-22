"use strict";
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(4, 4));
const sub = (number1, number2) => number1 - number2;
console.log(sub(4, 3));
//optional
function add2(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
//required
console.log(`adding withot 3rd:${add2(2, 4)}`);
console.log(`adding with 3rd:${add2(2, 4, 5)}`);
const sub2 = (num1, num2, num3 = 10) => num1 - num2 - num3;
console.log(`subing withot 3rd:${sub2(2, 4)}`);
console.log(`subing with 3rd:${sub2(2, 4, 8)}`);
//rest
function add3(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3];
console.log(`adding 3 ${add3(2, 4, ...numbers)}`);
//or
console.log(`adding 3 ${add3(2, 4, 1, 2, 3)}`);
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4]);
let concatString = getItems(['a', 'b', 'c']);
console.log(concatResult);
console.log(concatString);

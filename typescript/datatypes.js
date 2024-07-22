"use strict";
let lname;
lname = "Nikhil";
let newName = lname.toUpperCase();
console.log(newName);
let age;
age = 10;
age = 25.5;
let result = parseInt("25");
console.log(result);
let isValid;
let empList;
empList = ["Nikhil", "Varghese"];
let numList;
numList = [1, 2, 3, 4, 5];
let results = numList.filter((num) => num > 2);
let sum = numList.reduce((acc, num) => acc + num);
console.log(`Sum is ${sum}`);
let c = 0 /* Colors.Blue */;
console.log(`Color is ${c}`);
let swapNums;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNums = swapNumbers(10, 20);
console.log(swapNums[0]);

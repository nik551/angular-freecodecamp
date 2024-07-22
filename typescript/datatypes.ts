let lname;
lname = "Nikhil";
let newName = lname.toUpperCase();
console.log(newName);

let age:number;
age = 10;
age = 25.5;

let result = parseInt("25");
console.log(result)

let isValid:boolean;

let empList :string[];
empList = ["Nikhil","Varghese"];

let numList : Array<number>;

numList = [1,2,3,4,5]

let results = numList.filter((num)=>num>2);
let sum = numList.reduce((acc,num)=>acc+num);

console.log(`Sum is ${sum}`);

const enum Colors{
    Blue,
    Green,
    Red,
}
let c:Colors = Colors.Blue;
console.log(`Color is ${c}`);

let swapNums:[firstNum:number,secondNumber:number];

function swapNumbers(num1:number,num2:number):[number,number]{
    return [num2,num1];
}
swapNums = swapNumbers(10,20);
console.log(swapNums[0]);


"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//object restructuring
let { name: username, email: userEmail } = {
    name: "Nikhil",
    //   age: 20,
    id: 1,
    email: "nikhil@gmail.com",
};
console.log(`User name is ${username}`);
console.log(`User login is ${userEmail}`);
let employee = {
    salary: 1000,
    name: "Nikhil",
    id: 1,
    email: "nikhil@gmail.com",
};
//type destructuring
let [user1, user2, ...restUsers] = [
    {
        name: "Nikhil1",
        id: 1,
        email: "nikhil1@gmail.com",
    },
    {
        name: "Nikhil2",
        id: 2,
        email: "nikhil2@gmail.com",
    },
    {
        name: "Nikhil3",
        id: 3,
        email: "nikhil3@gmail.com",
    },
    {
        name: "Nikhil4",
        id: 4,
        email: "nikhil4@gmail.com",
    },
    {
        name: "Nikhil5",
        id: 5,
        email: "nikhil5@gmail.com",
    },
];
console.log(user1);
console.log(user2);
console.log(restUsers);
let result = restUsers.filter(user => user.id > 3);
console.log(result);
// @Component({})
// class Component{
// }

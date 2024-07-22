export interface User {
  name: String;
  age?: number;
  id: number;
  email: String;
}
//object restructuring
let { name: username, email: userEmail }: User = {
  name: "Nikhil",
  //   age: 20,
  id: 1,
  email: "nikhil@gmail.com",
};
console.log(`User name is ${username}`);

console.log(`User login is ${userEmail}`);

interface Employees extends User {
  salary: number;
}
let employee: Employees = {
  salary: 1000,
  name: "Nikhil",
  id: 1,
  email: "nikhil@gmail.com",
};

export interface Login {
  login(): User;
}

//type destructuring
let [user1, user2, ...restUsers]: User[] = [
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
let result = restUsers.filter(user => user.id>3);
console.log(result);

// @Component({})
// class Component{

// }

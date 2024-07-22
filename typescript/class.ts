import { Login,User} from "./interface";

class Employee implements Login {
  //private
  #id!: number;

  protected name!: String;

  address!: String;

  constructor(id: number, name: String, address: String) {
    this.address = address;
    this.#id = id;
    this.name = name;
  }
  login(): User {
    return {
        name: "Nikhil",
        //   age: 20,
        id: 1,
        email: "",
      };
  }
  get empId(): number {
    return this.#id;
  }
  set empId(id: number) {
    this.#id = id;
  }
  getNameWithAddress(): String {
    return this.name + " " + this.address;
  }
  static getEmployeeCount(): number {
    return 50;
  }
}

let nikhil = new Employee(2, "Nikhil", "Gotham City");
Employee.getEmployeeCount();
nikhil.empId = 100;
console.log(nikhil.empId);

//protected
class Manager extends Employee {
  constructor(id: number, name: String, address: String) {
    super(id, name, address);
  }
  getManagerWithAddress(): string {
    return `${this.name} is a manager at ${this.address}`;
  }
}

let address = nikhil.getNameWithAddress();
console.log(address);

// nikhil.id = 20;

// nikhil.name = "Nikil";

// nikhil.address = "Gotham City";

console.log(nikhil);

let mike = new Manager(20, "Mike", "SOme place");
console.log(mike.getManagerWithAddress());
console.log(mike.getNameWithAddress());

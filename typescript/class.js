"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(id, name, address) {
        //private
        _Employee_id.set(this, void 0);
        this.address = address;
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
    }
    login() {
        return {
            name: "Nikhil",
            //   age: 20,
            id: 1,
            email: "",
        };
    }
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    getNameWithAddress() {
        return this.name + " " + this.address;
    }
    static getEmployeeCount() {
        return 50;
    }
}
_Employee_id = new WeakMap();
let nikhil = new Employee(2, "Nikhil", "Gotham City");
Employee.getEmployeeCount();
nikhil.empId = 100;
console.log(nikhil.empId);
//protected
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getManagerWithAddress() {
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

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    name;
    constructor(name) {
        this.name = name;
    }
    //Implemented Default Method
    greet() {
        return `Hello from ${this.name}`;
    }
}
class Mentor extends User {
    role = "Mentor";
    constructor(name) {
        super(name);
    }
    getRole() {
        return `My Role : ${this.role}`;
    }
}
class Student extends User {
    role = "Student";
    //   constructor(name: String, public age: Number) {
    //     super(name);
    //   }
    callGreet() {
        console.log("---------------", this.name);
    }
    getRole() {
        return `My Role : ${this.role} and i am studying JS`;
    }
}
const Tanish = new Mentor("Tanish");
const Rahul = new Student("Rahul");
console.log(Tanish.greet());
console.log(Tanish.getRole());
console.log(Rahul.greet());
console.log(Rahul.getRole());
Rahul.callGreet();

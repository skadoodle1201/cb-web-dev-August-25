/**
 * Use
 * Parent Class to force some methods
 * Example Shape class
 * All shapes have area
 * But have different logic
 * We can create abstract method area
 * And define logic on child class
 **/

abstract class User {
  constructor(public name: String) {}

  abstract getRole(): String;

  //Implemented Default Method
  greet(): String {
    return `Hello from ${this.name}`;
  }
}

class Mentor extends User {
  role: String = "Mentor";

  constructor(name: String) {
    super(name);
  }

  getRole(): String {
    return `My Role : ${this.role}`;
  }
}

class Student extends User {
  role: String = "Student";

  constructor(name: String, public age: Number) {
    super(name);
  }

  getRole(): String {
    return `My Role : ${this.role} and i am studying JS And My age is ${this.age}`;
  }
}

const Tanish = new Mentor("Tanish");
const Rahul = new Student("Rahul", 25);

console.log(Tanish.greet());
console.log(Tanish.getRole());

console.log(Rahul.greet());
console.log(Rahul.getRole());

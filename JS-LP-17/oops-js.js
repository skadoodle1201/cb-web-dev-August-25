class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getAge() {
    console.log("Person Age", this.age);
  }
}

const P1 = new Person("tanish", 25);
// P1.getAge();

class Student extends Person {
  constructor(name, age, marks) {
    super(name, age);
    this.marks = marks;
  }

  #secret = "This Is Secret";

  getMarks() {
    console.log(`${this.name} of Age ${this.age} got :: ${this.marks}`);
  }

  getAge() {
    super.getAge();
  }
}

const S1 = new Student("Rahul", 12, 10);
S1.getAge();
// S1.getMarks();

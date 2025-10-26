function Person() {}

function Student(name, age) {
  //Implicitly  a this is created = {}
  this.name = name;
  this.age = age;
  // Implicitlt this is returned.
}
function Teacher(name, title) {
  this.name = name;
  this.title = title;
}

Person.prototype = Object.create(Object.prototype);

Person.prototype.constructor = Person;
Person.prototype.getGender = function () {
  console.log("Got Gender");
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.getStudentMarks = 10;
Student.prototype.constructor = Student;

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

const s1 = new Student("Tanish", 26);
const t1 = new Teacher("Rahul", "Senior");

console.log(s1);
console.log(t1);
console.log(t1.__proto__);

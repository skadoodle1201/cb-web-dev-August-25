function Person() {}
function Student() {}
function Teacher() {}

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

const s1 = new Student();
const t1 = new Teacher();

s1.getGender();

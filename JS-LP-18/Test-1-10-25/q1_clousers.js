/**
 * Question:
You are required to implement a Student Management System in JavaScript using closures.
The system should manage students’ data with the following functionalities:
1. getStudents(section) – Returns all students belonging to a specific section.
    Example: manager.getStudents("ECE")
2. getAvg(section) – Returns the average marks of all students in a section.
If the section has no students, return 0.
3. addStudent(name, marks, section) – Adds a new student with given details. 
    marks defaults to 0 if not provided.
4. updateMarks(name, marks) – Updates the marks of an existing student.
    If the student does not exist, the function should do nothing.

Your implementation must use closures to encapsulate the student data
(i.e., the array of students should not be directly accessible from outside the manager).
 */

//StudentManager Will return a manager.
const StudentManager = () => {
  const studentData = [
    { name: "Vandana", marks: 100, section: "ECE" },
    { name: "Reyanshi", marks: 99, section: "ECE" },
    { name: "Deepika", marks: 98, section: "IT" },
    { name: "Naman", marks: 50, section: "IT" },
  ];

  const addStudent = (name, section, marks) => {
    const student = {
      name: name,
      section: section,
      marks: marks,
    };
    studentData.push(student);
    return "SUCCESS";
  };

  const getStudents = (section) => {
    if (!section) {
      return "Invalid Request";
    }
    const studentsBySection = studentData.filter((studentInfo) => {
      if (studentInfo.section === section) {
        return studentInfo;
      }
    });

    return studentsBySection;
  };

  const updateMarks = (name, marks) => {
    for (let i = 0; i < studentData.length; i++) {
      const studentInfo = studentData[i];
      if (studentInfo.name === name) {
        studentInfo.marks = marks;
        break;
      }
    }
    return "SUCCESS";
  };

  const getAvg = (section) => {
    let studentMarksTotal = 0;
    let studentsInSection = 0;
    studentData.forEach((studentInfo) => {
      if (studentInfo.section === section) {
        studentMarksTotal += studentInfo.marks;
        studentsInSection++;
      }
    });

    if (studentsInSection === 0) {
      return "No Students Found";
    }

    return studentMarksTotal / studentsInSection;
  };

  return { addStudent, getStudents, updateMarks, getAvg };
};

const manager = StudentManager();

console.log(manager.addStudent("Tanish", "ECE", 45));
console.log(manager.addStudent("Rahul", "IT", 51));

console.log(manager.getStudents("IT"));

console.log(manager.updateMarks("Tanish", 100));

console.log(manager.getStudents("ECE"));

console.log(manager.getAvg("ITA"));

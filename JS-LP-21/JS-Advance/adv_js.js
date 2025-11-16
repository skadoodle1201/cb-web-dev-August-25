const array = [10, 2, 3, 4];

const sumWithInitial = array.reduce((accumulator, currentValue) => {
  console.log(accumulator);
  accumulator += currentValue;
  return accumulator;
}, 0);

console.log(sumWithInitial);

const studentData = {
  name: "Tanish",
  age: 26,
  marks: 99,
};

const { marks } = studentData; // Destructing
//equivalent to const marks = studentData.marks

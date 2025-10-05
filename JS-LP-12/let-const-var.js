//Hoisting is moving the variable and function definations to Top of code
// Each variable declared using let const and var is hoisted.
// Var when used before declared it give undefined where as let and const
// Throws Refrence error as they are hoisted in TDZ. (Temporal Dead Zone)

// TDZ is Temporal Dead Zone where let and const and cannot be asscessed.
// until fully intialized.

console.log(a); // throw reference error
let a = 10;

console.log(b);
const b = 20;

sum(5, 10); //will run
// Whole function defination is hoisted.
function sum(a, b) {
  console.log(a + b);
}

sumArrow(10, 40); // throw reference error
const sumArrow = (a, b) => console.log(a + b);

//Const only prevents re-assignment
const obj = {
  a: 10,
};

obj.a = 30; //works
obj.b = 40; //works

obj = { c: 10 }; //Typeerror : Cannot reassign const value

//Strings are immutable
let str = "help";
for (let i = 0; i < str.length; i++) {
  if (str[i] == "e") {
    str[i] = "u";
    console.log("inside if condition ");
  }
}
console.log(str); // will print help

//TO make a object work as a constant we use Object.freeze
const objFreeze = Object.freeze({
  a: 10,
});

objFreeze.a = 20; //will not throw error but does not change value
console.log(objFreeze); //Prints { a: 10 }

// Difference between == and ===
// == Compares values whereas === compare types as well.
10 == "10"; // true;
10 === "10"; // false;

//Type of undefined is undefined but typeof null is object.
typeof null; //'object'

//Sort by default works on lexical order
[1, 4, 543, 1313].sort(); //[(1, 1313, 4, 543)];
[1, 4, 543, 1313].sort((a, b) => a - b); //[1, 4, 543, 1313]

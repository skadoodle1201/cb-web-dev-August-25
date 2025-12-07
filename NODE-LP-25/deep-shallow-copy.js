const obj = { a: { b: 100 } };
let obj1 = { ...obj }; //Shallow
let obj2 = Object.assign(obj); //Shallow
let objCopy = JSON.parse(JSON.stringify(obj)); //Deep Copy

obj1.a.b = 999;
objCopy.a.b = 99999;
obj2.a.b = 88888;

console.log(obj);
console.log(obj1);
console.log(objCopy);
console.log(obj2);

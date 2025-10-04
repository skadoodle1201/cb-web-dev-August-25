let a = [10, 5, 10, 20];

console.log(a);

let b = [10, "hello", 10.3, false];
console.log(b);

b.push("Pushed");
console.log("After Push : ", b);

let popped = b.pop();
console.log(popped);
console.log("After Pop:", b);
console.log("Length of Array: ", b.length);

for (let i = 0; i < b.length; i++) {
  console.log(b[i]);
}
//Methods of Array
/**
 * 1. ForEach
 * 2. Map
 * 3. Filter
 * 4. Reduce
 *
 */

//ForEach

/**
 * The function that a foreach takes first parameter is
 * Value of element and second Value is index of the element.
 */

let names = ["Tanish", "Raj", "Rahul", "Manav", "Patriush"];

console.log("FOREACH START");

names.forEach((name, index) => {
  console.log("Name: ", name, "Index: ", index);
});

names.forEach((x, y) => {
  console.log("Name: ", x, "Index: ", y);
});

names.forEach((name, index) => {
  console.log("Index: ", index);
});

let fruits = ["apple", "banana", "mango", "orange"];
fruits.forEach((fruit, i) => {
  console.log("fruit: ", fruit, "Index: ", i);
});

console.log("FOREACH END");

//Map
let ages = [18, 20, 5, 10, 15, 16];

//If we dont want to use a value add a underscore for readability for dev.
let peopleOver18 = [];
ages.forEach((age, _i) => {
  if (age >= 18) {
    peopleOver18.push(age);
  }
});

console.log(peopleOver18);

//If no return statement in map it will return undefined.
//Map returns on each of the element.
const plus18 = ages.map((age, i) => {
  if (age >= 18) {
    return age;
  }
  return -1;
});

console.log(plus18);

//It only returns in case of specific return statement.
const plus18Correct = ages.filter((age) => {
  if (age >= 18) {
    return age;
  }
});

console.log(plus18Correct);

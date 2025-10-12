function test() {
  if (true) {
    var a = 10;
    let b = 40;
  }
  console.log(a); // prints a as this is functional scope and avaiable in function.
  console.log(b); // Throws error as b is block scoped
}

test();

console.log(a); // Throws error as a is functional scoped

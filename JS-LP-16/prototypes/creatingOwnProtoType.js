const obj = {
  a: 1,
  b: 2,
};

const newObj = Object.create(obj);

console.log(newObj.__proto__.__proto__.__proto__);

let ans = sum(5, 10);

console.log(ans);

function sum(a, b) {
  let c = a + b;
  return c;
}

//There is arrow functions
let arrowSum = (a, b) => {
  let c = a + b;
  return c;
};

let arrowAns = arrowSum(5, 10);

console.log("Arrow Sum : ", arrowAns);

// There IIF's -> Immedietatily invoked functions
((a, b) => {
  let c = a + b;
  console.log(c);
})(5, 10);

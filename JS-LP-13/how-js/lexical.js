// function c() {
//   var a = 10;

//   function d() {
//     console.log(a);
//   }
//   d();
// }

// c();

function abc() {
  let d = 10;

  const func = function () {
    console.log(d);
  };
  d = 100;

  return func;
}

const returnFn = abc();
returnFn();

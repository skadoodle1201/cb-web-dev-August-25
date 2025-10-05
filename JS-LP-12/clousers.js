//When inner fuctions access outer scope variables than inner function
//Forms a clouser with outer function.

function counter() {
  let count = 0;

  return function helper() {
    count++;
    return count;
  };
}

const help = counter();
console.log(help());
console.log(help());
console.log(help());
console.log(help());

const help2 = counter();
console.log(help2());
console.log(help2());
console.log(help2());
console.log(help2());

//We need to build counter , That has 3 methods increment, decrement, getCount

const Counter = () => {
  let count = 0;
  const counterOps = {
    increment: () => {
      count++;
    },
    decrement: () => {
      count--;
    },

    getCount: () => {
      return count;
    },
  };

  return counterOps;
};

const counter1 = Counter();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();
console.log(counter1.getCount());
counter1.decrement();
counter1.decrement();
counter1.decrement();

console.log(counter1.getCount());

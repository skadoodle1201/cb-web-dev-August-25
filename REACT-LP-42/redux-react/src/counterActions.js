const increment = () => {
  return {
    type: "increment",
  };
};

const decrement = () => {
  return {
    type: "decrement",
  };
};
const reset = () => {
  return {
    type: "reset",
  };
};

export { increment, decrement, reset };

const counterReducers = (state = 0, action) => {
  const { type } = action;
  switch (type) {
    case "increment": {
      state = state + 1;
      break;
    }
    case "decrement": {
      state = state - 1;
      break;
    }
    case "reset": {
      state = 0;
      break;
    }
  }
  return state;
};

export default counterReducers;

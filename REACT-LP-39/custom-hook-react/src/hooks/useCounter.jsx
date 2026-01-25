import { useState } from "react";

const useCounter = (initalValue = 0) => {
  const [counter, setCounter] = useState(initalValue);

  const updateCounter = () => {
    if (counter < 10) setCounter(counter + 1);
    else setCounter(0);
  };

  return [counter, updateCounter];
};

export default useCounter;

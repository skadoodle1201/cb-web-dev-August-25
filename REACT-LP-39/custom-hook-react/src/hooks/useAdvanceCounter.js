/**
 * Different Ways to export
 *
 * 1.
 *  const abc = () => {};
 *  export default abc;
 *
 * 2.
 *  function xyc() {}
 *  export default xyc;
 */

import { useState } from "react";

//3.
export default function useAdvanceCounter(intialValue = 0) {
  const [counter, setCounter] = useState(intialValue);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter > 0) setCounter(counter - 1);
    else setCounter(0);
  };
  const resetCounter = () => {
    setCounter(0);
  };

  return {
    counter,
    increment,
    decrement,
    resetCounter,
  };
}

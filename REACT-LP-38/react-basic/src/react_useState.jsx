import { useState } from "react";

const CounterNonUpdating = () => {
  let counter = 1;

  return (
    <div>
      <h1>Counter Non Updating Count App</h1>
      <button
        onClick={() => {
          counter++;
          console.log("current-count", counter);
        }}
      >
        +
      </button>

      <span>{counter}</span>
    </div>
  );
};

const CounterUpdating = () => {
  //useState is a hook that is used to create a react state
  //state, setState --> useState returns state and setState function
  //state is immutable
  //To change state value we use setState
  const [counter, setCounter] = useState(1);

  return (
    <div>
      <h1>Counter Updating Count App</h1>
      <span>{counter}</span>

      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -
      </button>
    </div>
  );
};

const CounterApp = () => {
  return (
    <>
      <CounterNonUpdating />
      <CounterUpdating />
    </>
  );
};

export default CounterApp;

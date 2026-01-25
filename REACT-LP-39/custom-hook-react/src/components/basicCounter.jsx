import useCounter from "../hooks/useCounter";

const BasicCounterApp = () => {
  const [counter, updateCounter] = useCounter(0);

  return (
    <div>
      <span>Counter: {counter}</span>
      &nbsp;&nbsp;&nbsp;
      <button onClick={updateCounter}>+</button>
    </div>
  );
};

export default BasicCounterApp;

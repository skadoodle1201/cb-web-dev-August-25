import useAdvanceCounter from "../hooks/useAdvanceCounter";

export default function AdvanceCounterApp() {
  const { counter, increment, decrement, resetCounter } = useAdvanceCounter();

  return (
    <div>
      <span>Counter: {counter}</span>
      &nbsp;&nbsp;&nbsp;
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
}

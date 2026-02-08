import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  incByAmount,
  increment,
  reset,
} from "./redux-config/counterSlice";

function App() {
  const cnt = useSelector((state) => {
    return state.counter.value;
  });

  return (
    <>
      <h1>Counter APP</h1>
      <h1>Current Counter: {cnt}</h1>
      <CustomButton options={{ fn: increment }} text={"+"} />
      <CustomButton options={{ fn: decrement }} text={"-"} />
      <CustomButton options={{ fn: incByAmount, params: [10] }} text={"+10"} />
      <CustomButton options={{ fn: reset }} text={"X"} />
    </>
  );
}

const CustomButton = ({ text, options: { fn, params = [] } }) => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(fn(...params));
      }}
    >
      {text}
    </button>
  );
};

export default App;

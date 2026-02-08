import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./counterActions";

const Counter = () => {
  const cnt = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter {cnt}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        X
      </button>
    </div>
  );
};

export default Counter;

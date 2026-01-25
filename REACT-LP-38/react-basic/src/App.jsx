import ReactBasic from "./react_basic";
import TodoEmptyApp from "./conditions_in_react";
import TodoApp from "./loops_in_react";
import CounterApp from "./react_useState";

const App = () => {
  return (
    <>
      <ReactBasic />
      <hr />
      <TodoApp />
      <hr />
      <TodoEmptyApp />
      <hr />
      <CounterApp />
    </>
  );
};
export default App;

import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [todos, setTodos] = useState([]);
  const updateTodo = (todo) => {
    setTodos((prev) => {
      return [...prev, todo];
    });
  };
  return (
    <>
      <TaskInput updateTodo={updateTodo} />
      <TaskList todos={todos} />
    </>
  );
}

export default App;

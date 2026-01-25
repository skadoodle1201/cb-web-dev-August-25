import { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <h1>Todo Application</h1>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;

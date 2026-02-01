import { useEffect, useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const getTodo = async () => {
    const response = await fetch("https://dummyjson.com/todos");
    const data = await response.json();
    const todoList = data.todos.map((item) => {
      return item.todo;
    });
    setTodos(todoList);
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <>
      <h1> Todo App</h1>
      <ol>
        {todos.length > 0
          ? todos.map((item, idx) => <li key={idx}>{item}</li>)
          : "Loading Your Todos ... .........."}
      </ol>
    </>
  );
};

export default TodoApp;

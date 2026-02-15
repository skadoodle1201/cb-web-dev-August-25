import { useEffect } from "react";
import { useState } from "react";
import axiosInstance from "./utility/axios";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodo() {
      const response = await axiosInstance.get("/todo");
      console.log(response.data.data);
      setTodos(response.data.data);
    }
    fetchTodo();
  }, []);

  return (
    <>
      <ol>
        {todos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ol>
    </>
  );
}

export default App;

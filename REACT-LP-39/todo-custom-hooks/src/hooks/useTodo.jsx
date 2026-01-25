import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function useTodo(intialValue) {
  const [todos, setTodos] = useState(intialValue || []);

  const addTodo = (newTodo = "") => {
    if (newTodo.length > 0)
      setTodos([...todos, { task: newTodo, id: uuidv4(), date: new Date() }]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => {
      const filterResults = prev.filter((t) => t.id !== id);
      return filterResults;
    });
  };

  const moveUp = (id) => {
    const currentIndex = todos.findIndex((t) => t.id == id);
    if (currentIndex > 0) {
      setTodos((prev) => {
        let tempTodos = [...prev];

        [tempTodos[currentIndex], tempTodos[currentIndex - 1]] = [
          tempTodos[currentIndex - 1],
          tempTodos[currentIndex],
        ];

        return tempTodos;
      });
    }
  };

  const moveDown = (id) => {
    const currentIndex = todos.findIndex((t) => t.id == id);
    if (currentIndex >= 0 && currentIndex < todos.length - 1) {
      setTodos((prev) => {
        let tempTodos = [...prev];

        [tempTodos[currentIndex], tempTodos[currentIndex + 1]] = [
          tempTodos[currentIndex + 1],
          tempTodos[currentIndex],
        ];

        return tempTodos;
      });
    }
  };

  return {
    todos,
    addTodo,
    deleteTodo,
    moveUp,
    moveDown,
  };
}

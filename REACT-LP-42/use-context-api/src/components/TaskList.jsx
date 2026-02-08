import React, { useContext } from "react";
import { ThemeContext, TodoContext } from "../App";

const TaskList = () => {
  const themeContext = useContext(ThemeContext);
  const todoContext = useContext(TodoContext);
  console.log(todoContext);
  return (
    <div
      className={
        themeContext ? "task-list task-list-dark" : "task-list task-list-light"
      }
    >
      TaskList
      <ol>
        {todoContext.todos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
        <button
          onClick={() => {
            todoContext.updateTodos("Dance");
          }}
        >
          Add Task
        </button>
      </ol>
    </div>
  );
};

export default TaskList;

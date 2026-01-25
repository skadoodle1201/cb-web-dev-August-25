import { useState } from "react";

const TodoForm = ({ todos, setTodos }) => {
  const [newTask, setNewTask] = useState("");

  const updateTodos = (e) => {
    e.preventDefault();
    setTodos([...todos, newTask]);
    setNewTask("");
  };

  const updateNewTask = (event) => {
    setNewTask(event.target.value);
  };
  return (
    <>
      <form action="#" onSubmit={updateTodos}>
        <input
          type="text"
          placeholder="Enter Your Task"
          onChange={updateNewTask}
        />
        <br />
        <button type="submit" disabled={newTask.length < 3 ? true : false}>
          Add Task
        </button>
      </form>
    </>
  );
};

export default TodoForm;

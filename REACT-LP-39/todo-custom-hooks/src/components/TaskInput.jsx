import { useState } from "react";

export default function TaskInput({ addTodo }) {
  const [newTask, setNewTask] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Task"
        value={newTask}
        onChange={(ev) => {
          setNewTask(ev.target.value);
        }}
      />
      <button
        disabled={newTask.length < 3}
        onClick={() => {
          addTodo(newTask);
          setNewTask("");
        }}
      >
        Add Task
      </button>
    </div>
  );
}

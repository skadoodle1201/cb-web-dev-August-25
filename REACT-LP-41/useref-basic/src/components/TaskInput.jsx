import React, { useRef, useState } from "react";

const TaskInput = ({ updateTodo }) => {
  const inputRef = useRef(null);

  const updateTodoList = () => {
    updateTodo(inputRef.current.value);
  };

  return (
    <div>
      <input type="text" placeholder="Add Task" ref={inputRef} />
      <button onClick={updateTodoList}> Add Task</button>
    </div>
  );
};

export default TaskInput;

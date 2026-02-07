import React from "react";

const TaskList = ({ todos }) => {
  return (
    <div>
      <ol>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ol>
    </div>
  );
};

export default TaskList;

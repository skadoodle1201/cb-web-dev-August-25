const todos = [
  {
    task: "Swim",
    description: "Swiming is good",
  },
  {
    task: "Cook",
    description: "cooking is good",
  },
  {
    task: "Code",
    description: "Coding is good",
  },
];

const TodoApp = () => {
  return (
    <div>
      <h1>Todo Application</h1>
      <ol>
        {todos.map((todo) => (
          <li>
            {todo.task} : {todo.description}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoApp;

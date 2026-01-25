const todos = [];

const TodoEmptyApp = () => {
  return (
    <div>
      <h1>Todo Empty Application</h1>
      <ol>
        {todos.length > 0
          ? todos.map((todo) => (
              <li>
                {todo.task} : {todo.description}
              </li>
            ))
          : "No Task Pending"}
      </ol>
    </div>
  );
};

export default TodoEmptyApp;

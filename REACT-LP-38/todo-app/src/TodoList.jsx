const TodoList = ({ todos }) => {
  return (
    <>
      <ol>
        {todos.length > 0
          ? todos.map((todo) => {
              return <li>{todo}</li>;
            })
          : "No pending Task"}
      </ol>
    </>
  );
};

export default TodoList;

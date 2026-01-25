export default function TodoDisplay({ todos, deleteTodo, moveUp, moveDown }) {
  return (
    <ol>
      {todos.map((todo) => {
        return (
          <li>
            {todo.task}{" "}
            <button
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              X
            </button>
            <button
              onClick={() => {
                moveUp(todo.id);
              }}
            >
              ⬆️
            </button>
            <button
              onClick={() => {
                moveDown(todo.id);
              }}
            >
              ⬇️
            </button>
          </li>
        );
      })}
    </ol>
  );
}

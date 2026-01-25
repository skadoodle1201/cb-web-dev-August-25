import TaskInput from "./components/TaskInput";
import TodoDisplay from "./components/TodoDisplay";
import useTodo from "./hooks/useTodo";

function App() {
  const { todos, addTodo, deleteTodo, moveUp, moveDown } = useTodo([]);

  return (
    <>
      <TaskInput addTodo={addTodo} />
      <TodoDisplay
        todos={todos}
        deleteTodo={deleteTodo}
        moveUp={moveUp}
        moveDown={moveDown}
      />
    </>
  );
}

export default App;

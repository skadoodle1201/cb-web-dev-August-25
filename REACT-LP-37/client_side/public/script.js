const todoList = document.getElementById("todo-list");

const renderList = async () => {
  const response = await fetch("http://localhost:4444/todos");
  const data = await response.json();
  const todos = data.todo;
  todoList.replaceChildren();
  todos.forEach((todo) => {
    const newLi = document.createElement("li");
    newLi.innerHTML = todo;
    todoList.appendChild(newLi);
  });
};

const inputForm = document.getElementById("task-input");

inputForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log(e.target.elements.task.value);
  await fetch("http://localhost:4444/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      task: e.target.elements.task.value,
    }),
  });
  renderList();
});

renderList();

const url = "http://localhost:3000";
const getTodoList = async () => {
  const response = await fetch(`${url}/todo`);
  const resData = await response.json();
  const taskList = resData.data;
  return taskList;
};

const addTask = async (task) => {
  await fetch(`${url}/todo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task: task }),
  });
};

const updateTask = async (taskId, action) => {
  let payload = {
    id: taskId,
  };
  if (action == "status") {
    payload.action = "update-status";
    payload.status = true;
  } else if (action == "task") {
    payload.task = "";
    payload.action = "update-task";
  }

  const response = await fetch(`${url}/todo`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
};

const updateTaskOrder = async (taskId, action) => {
  let fullUrl = `${url}/todo/${taskId}`;
  if (action == "up") {
    fullUrl = `${fullUrl}?action=move-up`;
  } else if (action == "down") {
    fullUrl = `${fullUrl}?action=move-down`;
  }

  const response = await fetch(fullUrl, {
    method: "PATCH",
  });
};

const deleteTask = async (taskId) => {
  const fullUrl = `${url}/todo/${taskId}`;

  const response = await fetch(fullUrl, {
    method: "DELETE",
  });
};

const refreshList = () => {
  const taskList = document.getElementById("task-list");
  const statusPill = document.getElementById("task-status-pill");
  taskList.replaceChildren();
  getTodoList()
    .then((result) => {
      const completed = result.filter((task) => task.status === true).length;
      const active = result.length - completed;
      if (statusPill) {
        statusPill.textContent =
          result.length === 0
            ? "No tasks yet"
            : `${active} active · ${completed} done`;
      }

      result.forEach((taskItem) => {
        const newTask = document.createElement("li");
        const isDone = taskItem.status == true ? "task-done" : "";
        newTask.className = `list-item ${isDone}`;

        newTask.id = taskItem.id;
        newTask.innerHTML = `
          <div class="task-content">
            <span class="task-dot"></span>
            <span class="task-text">${taskItem.task}</span>
          </div>
          <div class="actions">
            <button class="done" title="Mark as done">✅</button>
            <button class="up" title="Move up">⬆️</button>
            <button class="down" title="Move down">⬇️</button>
            <button class="delete" title="Delete">☠️</button>
            <button class="edit" title="Edit">✏️</button>
          </div>
          `;
        taskList.appendChild(newTask);
      });
    })
    .then(() => {
      const doneButtons = document.querySelectorAll(".done");
      doneButtons.forEach((doneButton) => {
        doneButton.addEventListener("click", (e) => {
          const taskId = e.target.closest("li").id;
          updateTask(taskId, "status").then(() => {
            refreshList();
          });
        });
      });

      const upButtons = document.querySelectorAll(".up");
      upButtons.forEach((upButton) => {
        upButton.addEventListener("click", (e) => {
          const taskId = e.target.closest("li").id;
          updateTaskOrder(taskId, "up").then(refreshList);
        });
      });

      const downButtons = document.querySelectorAll(".down");
      downButtons.forEach((downButton) => {
        downButton.addEventListener("click", (e) => {
          const taskId = e.target.closest("li").id;
          updateTaskOrder(taskId, "down").then(refreshList);
        });
      });
      const editButtons = document.querySelectorAll(".edit");
      editButtons.forEach((editButton) => {
        editButton.addEventListener("click", (e) => {
          console.log(e.target.closest("li").id);
        });
      });

      const deleteButtons = document.querySelectorAll(".delete");
      deleteButtons.forEach((deleteButton) => {
        deleteButton.addEventListener("click", (e) => {
          const taskId = e.target.closest("li").id;
          deleteTask(taskId).then(refreshList);
        });
      });
    });
};

refreshList();

const addTaskForm = document.getElementById("add-task-form");
addTaskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = event.target.elements.task_input.value;
  addTask(inputValue).then(() => {
    refreshList();
  });
});

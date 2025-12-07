class Todo {
  constructor() {
    this.todoList = [];
  }

  get() {
    return this.todoList;
  }

  add(id, task, status = false) {
    this.todoList.push({
      id: id, //To find a task easily
      task: task,
      status: status, //False because abhi kaam nhi hua h
    });
  }
  remove(id) {
    const indexToRemove = this.todoList.findIndex((val) => {
      return val.id == id;
    });
    this.todoList.splice(indexToRemove, 1);
  }

  updateStatus(id, status = true) {
    const indexToMarkDone = this.todoList.findIndex((val) => {
      return val.id == id;
    });
    this.todoList[indexToMarkDone].status = status;
  }
  up() {}
  down() {}
}

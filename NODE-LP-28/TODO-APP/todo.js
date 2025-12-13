class Todo {
  constructor() {
    this.todoList = [];
  }

  getList() {
    return this.todoList;
  }

  getElementIndex(id) {
    const index = this.todoList.findIndex((val) => {
      return val.id == id;
    });

    return index;
  }

  add(id, task, status = false) {
    this.todoList.push({
      id: id, //To find a task easily
      task: task,
      status: status, //False because abhi kaam nhi hua h
    });
  }

  remove(id) {
    const indexToRemove = this.getElementIndex(id);
    if (indexToRemove < 0) {
      throw new Error("Element Not Found");
    }
    this.todoList.splice(indexToRemove, 1);
  }

  //Destructing Object in params
  update(id, action, { status, task }) {
    const indexToUpdate = this.getElementIndex(id);
    if (indexToUpdate < 0) {
      throw new Error("Element Not Found");
    }

    if (action == "update-status" && typeof status === "boolean") {
      this.todoList[indexToUpdate].status = status;
    } else if (action == "update-task" && task) {
      this.todoList[indexToUpdate].task = task;
    }
  }

  move(id, action) {
    const indexToMove = this.getElementIndex(id);
    if (indexToMove < 0) {
      throw new Error("Not Found");
    }

    if (action === "move-up" && indexToMove > 0) {
      [this.todoList[indexToMove], this.todoList[indexToMove - 1]] = [
        this.todoList[indexToMove - 1],
        this.todoList[indexToMove],
      ];
    } else if (
      action === "move-down" &&
      indexToMove < this.todoList.length - 1
    ) {
      [this.todoList[indexToMove], this.todoList[indexToMove + 1]] = [
        this.todoList[indexToMove + 1],
        this.todoList[indexToMove],
      ];
    }
  }

  getTodoDetail(id) {
    const index = this.getElementIndex(id);
    if (index < 0) {
      throw new Error("Not Found");
    }

    return this.todoList[index];
  }
}

module.exports = Todo;

const { client } = require("./mongo-config");
const { ObjectId } = require("mongodb");

class Todo {
  constructor() {
    this.todoList = [];
    this.db = client.db("todo_app");
    this.collection = this.db.collection("todo");
  }

  async getList() {
    const todo = await this.collection.find({}).toArray();
    return todo;
  }

  getElementIndex(id) {
    const index = this.todoList.findIndex((val) => {
      return val.id == id;
    });

    return index;
  }

  async add(task, order, status = false) {
    await this.collection.insertOne({
      task: task,
      status: status, //False because abhi kaam nhi hua h
      order,
    });
  }

  async remove(id) {
    await this.collection.deleteOne({
      _id: new ObjectId(id),
    });
  }

  //Destructing Object in params
  async update(id, action, { status, task }) {
    const updatePaylaod = {};
    if (action == "update-status" && typeof status === "boolean") {
      updatePaylaod.status = status;
    } else if (action == "update-task" && task) {
      updatePaylaod.task = task;
    }
    const query = { _id: new ObjectId(id) }; // tell kisko update karna h.
    const update = { $set: updatePaylaod }; // Tells mongo to update what and how
    const result = await this.collection.updateOne(query, update);
    console.log(result);
    if (!result.matchedCount) {
      throw new Error("NOT FOUND");
    }
  }

  async move(id, newOrder) {
    // const session = this.db.client.startSession();
    try {
      // session.startTransaction();
      const currentTask = await this.collection.findOne(
        {
          _id: new ObjectId(id),
        }
        // { session }
      );

      if (currentTask.order == newOrder) {
        // session.abortTransaction();
        return;
      }

      await this.collection.updateMany(
        { order: { $gt: currentTask.order } },
        {
          $inc: { order: -1 },
        }
        // { session }
      );

      await this.collection.updateMany(
        {
          order: { $gte: Number(newOrder) },
        },
        {
          $inc: { order: 1 },
        }
      );

      await this.collection.updateOne(
        {
          _id: new ObjectId(id),
        },
        {
          $set: { order: Number(newOrder) },
        }
      );

      // await session.commitTransaction();
    } catch (error) {
      console.log(error);
    }
  }

  getTodoDetail(id) {
    return this.collection.findOne({
      _id: new ObjectId(id),
    });
  }
}

module.exports = Todo;

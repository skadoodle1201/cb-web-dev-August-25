const mongoose = require("mongoose");
const { Schema } = mongoose;

const canvasSchema = new Schema({
  name: { type: String, required: true },
  canvas: { type: Object, default: {} },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user", // The 'ref' value must match the model name 'user'
  },
});

const Canvas = mongoose.model("canvas", canvasSchema);

module.exports = Canvas;

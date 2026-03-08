const Canvas = require("../models/canvas");

const getCanvas = async (req, res) => {
  const { id } = req.query;
  const userDetail = req.user;
  const userId = userDetail.id;

  const whereQuery = { user: userId };

  if (id) {
    whereQuery._id = id;
  }

  const userCanvas = await Canvas.find(whereQuery).lean();

  return res.status(200).json({
    data: {
      canvas: userCanvas,
    },
  });
};

const saveCanvas = async (req, res) => {
  const { canvas, name, canvasId } = req.body;
  const { id } = req.user;

  if (canvasId) {
    const updatePayload = {
      canvas: canvas,
    };
    if (name) {
      updatePayload.name = name;
    }
    await Canvas.updateOne(
      {
        _id: canvasId,
        user: id,
      },
      updatePayload,
    );
  } else {
    const newCanvase = new Canvas({
      canvas: canvas,
      name: name || "canvas",
      user: id,
    });

    await newCanvase.save();
  }

  res.status(200).json({
    message: "Success Saving Canvas",
  });
};

module.exports = {
  getCanvas,
  saveCanvas,
};

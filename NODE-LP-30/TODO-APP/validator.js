const validateTask = (task) => {
  if (typeof task !== "string" || task === "") {
    return false;
  }

  return true;
};

const validateStatus = (status) => {
  if (typeof status !== "boolean") {
    return false;
  }
  return true;
};

const validateActions = (action, validActions = []) => {
  if (!action || !validActions.includes(action)) {
    return false;
  }
  return true;
};

const validateTaskMiddleware = (req, res, next) => {
  const { task } = req.body;
  const isValid = validateTask(task);
  if (!isValid) {
    return res.status(400).json({
      message: "Invalid Request",
    });
  }

  next();
};

const validateUpdateTaskMiddleware = (req, res, next) => {
  const { id, status, task, action } = req.body;
  const validActions = ["update-status", "update-task"];

  let isValid = id && validateActions(action, validActions);

  if (action == "update-status" && isValid) {
    isValid = validateStatus(status);
  } else if (action == "update-task" && isValid) {
    isValid = validateTask(task);
  }

  if (!isValid) {
    return res.status(400).json({
      message: "Invalid Request",
    });
  }
  next();
};

const validateMoveTaskMiddleware = (req, res, next) => {
  const { id } = req.params;
  const { action } = req.query;
  const validActions = ["move-up", "move-down"];

  const isValid = id && validateActions(action, validActions);

  if (!isValid) {
    return res.status(400).json({
      message: "Invalid Request",
    });
  }
  next();
};

const validateId = (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      message: "Invalid Request",
    });
  }
  next();
};

module.exports = {
  validateTaskMiddleware,
  validateUpdateTaskMiddleware,
  validateMoveTaskMiddleware,
  validateId,
};

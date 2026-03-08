const { verifyToken } = require("../utility/helper");

const authenticateUser = async (req, res, next) => {
  const { auth } = req.cookies;
  const isValidUser = await verifyToken(auth);
  if (!isValidUser) {
    return res.status(403).json({
      message: "Unauthorized",
    });
  }
  req.user = isValidUser;
  next();
};

module.exports = {
  authenticateUser,
};

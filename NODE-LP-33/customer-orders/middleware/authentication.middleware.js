const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    const [_, userToken] = token.split(" ");
    const decoded = jwt.verify(userToken, process.env.JWT_SIGNATURE);
    req.user = decoded;
    return next();
  } catch (err) {
    return res.status(403).json({
      message: "Unauthorized",
    });
  }
};

module.exports = {
  authenticateUser,
};

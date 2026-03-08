const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

const generateHashedPass = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  return hashPassword;
};

const comparePassword = async (password, hashedPass) => {
  const isValid = await bcrypt.compare(password, hashedPass);
  return isValid;
};

const verifyToken = async (token) => {
  if (!token) {
    return false;
  }

  const decoded = jwt.verify(token, jwtSecret);
  return decoded;
};

module.exports = {
  generateHashedPass,
  comparePassword,
  verifyToken,
};

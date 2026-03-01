const bcrypt = require("bcrypt");

const generateHashedPass = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  return hashPassword;
};

const comparePassword = async (password, hashedPass) => {
  const isValid = await bcrypt.compare(password, hashedPass);
  return isValid;
};

module.exports = {
  generateHashedPass,
  comparePassword,
};

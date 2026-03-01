const { Router } = require("express");
const {
  createUser,
  loginUser,
  validateToken,
  logoutUser,
} = require("../controller/user.controller");
const router = Router();

router.post("/", createUser);
router.post("/login", loginUser);

router.get("/validate", validateToken);

router.post("/logout", logoutUser);

module.exports = router;

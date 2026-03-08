const { Router } = require("express");
const { authenticateUser } = require("../middlewares/auth.middleware");
const { getCanvas, saveCanvas } = require("../controller/canvas.controller");

const router = Router();

router.use(authenticateUser);

router.get("/", getCanvas);
router.post("/", saveCanvas);

module.exports = router;

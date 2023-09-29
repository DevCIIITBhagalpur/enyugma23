const router = require("express").Router();
const userController = require("../controller/userController");

router.post("/register",userController.Signup);
router.post("/login",userController.Signin);

module.exports = router;
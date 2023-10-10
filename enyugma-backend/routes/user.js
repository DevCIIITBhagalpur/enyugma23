import { Router } from "express";
import { Login, Register } from "../controller/userController.js";
const router = Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  Login(email, password);
});

router.post("/register", (req, res) => {
  Register(req, res);
});

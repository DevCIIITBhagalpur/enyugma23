import { Router } from "express";
import { Login, Register } from "../controller/userController.js";
import upload from "../controller/fileUpload.js";
const router = Router();

router.post("/login", (req, res) => {
    const { email, password } = req.body;
    Login(email, password);
});

router.post("/register", upload.single("file"), async (req, res) => {
    await Register(req, res);
});

export default router;

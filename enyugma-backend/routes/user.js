import { Router } from "express";
import { Login, Register } from "../controller/userController.js";
import upload from "../controller/fileUpload.js";
const router = Router();

router.post("/login", (req, res) => {
    const { email, password } = req.body;
    Login(email, password);
});

router.post("/register", (req, res) => {
    if(!req.file && req.transactionId) {
        res.status(400).json({
            message: "Please upload the reciept"
        })
        return;
    }
    if (req.file) {
        upload.single("file");
    }
    Register(req, res);
});

export default router;

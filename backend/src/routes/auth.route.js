import express from "express";

const router = express.Router();

router.get("/signup", (req, res) => {
    res.send("Signup endppoint");
});

router.get("/login", (req, res) => {
    res.send("Login endppoint");
});

router.get("/logout", (req, res) => {
    res.send("Logout endppoint");
});

export default router;
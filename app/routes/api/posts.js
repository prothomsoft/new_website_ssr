import express from "express";
const router = express.Router();

router.get("/api/dashboars/test", (req, res) => res.json({ msg: "Dashboard works!" }));

export default router;

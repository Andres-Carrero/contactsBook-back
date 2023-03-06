import express from "express";
import ctrl from "../controllers/UserController";
const router = express.Router()

router.post('/create', ctrl.create);

export default router;
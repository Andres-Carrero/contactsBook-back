import express from "express";
import ctrl from "../controllers/AuthController";
const router = express.Router()

router.post('/login', ctrl.login);
router.get('/findData/:user_id', ctrl.findData);

export default router;
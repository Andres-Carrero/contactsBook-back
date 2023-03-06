import express from "express";
import ctrl from "../controllers/GroupsContoller";
const router = express.Router()

router.post('/create', ctrl.create);
router.post('/findAll', ctrl.findAll);

export default router;
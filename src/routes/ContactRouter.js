import express from "express";
import ctrl from "../controllers/ContactController";
const router = express.Router()

router.post('/create', ctrl.create);
router.get('/findAll/:user_id', ctrl.findAll);
router.get('/findOne/:uuid', ctrl.findOne);
router.put('/update/:uuid', ctrl.update);
router.delete('/delete/:uuid', ctrl.deletes);

export default router;
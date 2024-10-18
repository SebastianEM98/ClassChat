import express from 'express'
import MessageController from '../controllers/message.controller.js'
import protectRoute from '../middlewares/protectRoute.js'

const router = express.Router();

router.post("/save", protectRoute, MessageController.saveMessage);
router.get("/classroom/:id", protectRoute, MessageController.getMessagesByClassroom);


export default router;
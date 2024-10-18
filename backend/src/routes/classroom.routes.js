import express from 'express'
import ClassroomController from '../controllers/classroom.controller.js'
import protectRoute from '../middlewares/protectRoute.js';

const router = express.Router();

router.post("/create", protectRoute, ClassroomController.create);
router.get("/", protectRoute, ClassroomController.getAll);
router.get("/:id", protectRoute, ClassroomController.getClassroomById);
router.put("/:id", protectRoute, ClassroomController.updateClassroom);
router.delete("/:id", protectRoute, ClassroomController.removeById);

export default router;
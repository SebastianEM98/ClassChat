import express from 'express'
import AuthController from '../controllers/auth.controler.js'

const router = express.Router();

router.post("/signup", AuthController.singUp);
router.post("/signin", AuthController.singIn);

export default router;
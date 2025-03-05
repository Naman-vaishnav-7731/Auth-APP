import { Router } from 'express';
const router = Router();
import { userLogin, userRegister, verifyEmail } from '../controllers/auth.controller.js';
import { userRegisterValidator, userLoginValidator } from '../validations/userValidator.js';

router.post("/auth-login", userLoginValidator, userLogin);
router.post("/auth-signup", userRegisterValidator, userRegister);
router.get("/verify-email", verifyEmail);


export default router;
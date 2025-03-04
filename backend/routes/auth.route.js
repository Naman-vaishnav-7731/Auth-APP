import { Router } from 'express';
const router = Router();
import { userLogin, userRegister } from '../controllers/auth.controller.js';
import { userRegisterValidator, userLoginValidator } from '../validations/userValidator.js';

router.post("/auth-login", userLoginValidator, userLogin);
router.post("/auth-signup", userRegisterValidator, userRegister);

export default router;
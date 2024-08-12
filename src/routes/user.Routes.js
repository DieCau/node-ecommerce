import { Router } from "express";
import { create, login } from "../controllers/user.controllers.js";
import {
  userValidations,
  loginValidations,
} from "../validators/userValidation.js";
import { validateFields } from "../validators/validateFields.js";

const router = Router()

router.post("/user", [userValidations.email, userValidations.password], validateFields, create)
router.post("/login", [loginValidations.email, loginValidations.password], validateFields, login)
export default router
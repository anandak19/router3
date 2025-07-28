import { Router } from "express";
import {
  checkUserExistance,
  validateNewUser,
} from "../../middlewares/admin/userValidators.js";
import { validateToken } from "../../controllers/auth/authVarifications.js";
import { authorizeAdmin } from "../../middlewares/auth.middleware.js";
import { AddUser } from "../../controllers/user/user.controller.js";

const adminRoutes = Router();

adminRoutes.post(
  "/add-user",
  validateToken,
  authorizeAdmin,
  validateNewUser,
  checkUserExistance,
  AddUser
);

export default adminRoutes;

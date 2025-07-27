import { Router } from "express";
import { checkUserExistance, validateNewUser } from "../middlewares/admin/userValidators.js";
import { AddUser } from "../controllers/admin/user.controller.js";
import { validateToken } from "../controllers/auth/authVarifications.js";
import { authorizeAdmin } from "../middlewares/auth.middleware.js";

const adminRoutes = Router()

adminRoutes.post("/add-user", validateToken, authorizeAdmin, validateNewUser, checkUserExistance, AddUser)
 
export default adminRoutes
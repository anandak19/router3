import { Router } from "express";
import { authorizeAdmin, authorizeAppUser, authorizeCashCollector, authorizeSiteUser, authorizeSubAdmin, validateLoginData } from "../middlewares/auth.middleware.js";
import { loginUser } from "../controllers/auth.controller.js";

const authRoutes = Router();

authRoutes.post("/login", validateLoginData, authorizeSiteUser,  loginUser);
authRoutes.post("/app/login", validateLoginData, authorizeAppUser, loginUser);

export default authRoutes;
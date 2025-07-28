import { Router } from "express";
import { authorizeAppUser, authorizeSiteUser, validateLoginData } from "../../middlewares/auth.middleware.js";
import { loginUser } from "../../controllers/auth/auth.controller.js";

const authRoutes = Router();

authRoutes.post("/login", validateLoginData, authorizeSiteUser,  loginUser);
authRoutes.post("/app/login", validateLoginData, authorizeAppUser, loginUser);

//add logout for both

export default authRoutes;
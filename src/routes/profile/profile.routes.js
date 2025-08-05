import express from "express";
import { validateToken } from "../../controllers/auth/authVarifications.js";
import {
  addSiteProfile,
  getProfilesBySite,
} from "../../controllers/profile/profile.controller.js";
import { validateParamId } from "../../middlewares/global/validateId.js";
import { validateNewProfile } from "../../middlewares/profile/profileValidators.js";
import { varifySite } from "../../middlewares/site/varifySite.js";
import { authorizeAdmin } from "../../middlewares/auth.middleware.js";

const profileRoutes = express.Router({ mergeParams: true });

// url : /site/:id/profile 

//req.user
profileRoutes.use(validateToken);
profileRoutes.use(validateParamId);
profileRoutes.use(varifySite);

// add a new profile to a site
profileRoutes.post("/new", authorizeAdmin, validateNewProfile, addSiteProfile);

// get the profiles of a site
profileRoutes.get("/", getProfilesBySite);



export default profileRoutes;

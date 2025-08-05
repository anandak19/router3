import { Router } from "express";
import {
  addNewSite,
  deleteSite,
  getAllSites,
  saveEditedSiteData,
} from "../../controllers/site/site.controller.js";
import {
  assignSite,
  getAssignedSitesForUser,
  getSitesForCurrentUser,
} from "../../controllers/site/siteMapping.controller.js";
import { validateNewSite } from "../../middlewares/site/siteValidators.middleware.js";
import { validateToken } from "../../controllers/auth/authVarifications.js";
import { authorizeAdmin } from "../../middlewares/auth.middleware.js";
import { validateParamId } from "../../middlewares/global/validateId.js";
import { varifySite } from "../../middlewares/site/varifySite.js";
import { findUser } from "../../middlewares/user/user.middleware.js";

const siteRoutes = Router();

// url : /site 

siteRoutes.use(validateToken);

// get all sites in the db ---TESTED OK
siteRoutes.get("/", authorizeAdmin, getAllSites);

// add new site ---TESTED OK
siteRoutes.post("/new", authorizeAdmin, validateNewSite, addNewSite);

// edit site --PENDING
siteRoutes.patch("/edit", saveEditedSiteData);

// delete site ---PENDING
siteRoutes.delete("/delete/:id", deleteSite);

// assign site ---TESTED OK
siteRoutes.post("/:id/assign-user", validateParamId, varifySite, findUser, assignSite);

// get sites assigned for me (user who logged in)
siteRoutes.get("/assigned", getSitesForCurrentUser);

// get sites assigned for the selected user
siteRoutes.get("/user/:id", getAssignedSitesForUser);

export default siteRoutes;

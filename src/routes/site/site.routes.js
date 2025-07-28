import { Router } from "express";
import { addNewSite, deleteSite, getSitesAddedByUser, saveEditedSiteData } from "../../controllers/site/site.controller";
import { assignSite, getAssignedSitesForUser, getSitesForCurrentUser } from "../../controllers/site/siteMapping.controller";


const siteRoutes = Router();

// add site
siteRoutes.post("/new", addNewSite)

// edit site
siteRoutes.patch("/edit", saveEditedSiteData)

// delete site
siteRoutes.delete("/delete/:id", deleteSite)

// assign site
siteRoutes.post("/map/:id", assignSite)

// get sites added by me (user who logged in)
siteRoutes.get("/own", getSitesAddedByUser)

// get sites assigned for me (user who logged in)
siteRoutes.get("/assigned", getSitesForCurrentUser)

// get sites assigned for the selected user
siteRoutes.get("/user/:id", getAssignedSitesForUser)

export default siteRoutes;
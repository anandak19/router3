import { STATUS_CODES } from "../../constants/statusCodes.js";
import { createSite } from "../../services/site/site.service.js";

// to save new site ---PENDING
export const addNewSite = async (req, res, next) => {
  try {
    console.log(req.user)
    console.log(req.site)

    await createSite(req.site, req.user._id);
    res
      .status(STATUS_CODES.CREATED)
      .json({ message: "Sited created successfully" });
  } catch (error) {
    next(error);
  }
};

// save updated site ---PENDING
export const saveEditedSiteData = async (req, res, next) => {
  try {
    // get site details from req.site
    // find selected site from the db
    // save to db
  } catch (error) {
    next(error);
  }
};

// delete selected site ---PENDING
export const deleteSite = async (req, res, next) => {
  try {
    // get site id from req.site
    // soft delete the site
  } catch (error) {
    next(error);
  }
};

// get sites added by current user ---PENDING
export const getSitesAddedByUser = async (req, res, next) => {
  try {
    // get user
    // find sites added by user
    // return
  } catch (error) {
    next(error);
  }
};

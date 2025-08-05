import { STATUS_CODES } from "../../constants/statusCodes.js";
import { userSiteHolders } from "../../constants/userRoles.js";
import siteMappingService from "../../services/site/siteMapping.service.js";
import { AppError } from "../../utils/appError.js";

// ---Testing PENDING
export const assignSite = async (req, res, next) => {
  try {
    console.log(req.userData)

    if (userSiteHolders.includes(req.userData.userRole)) {
      const savedUserSite = await siteMappingService.createUserSite(
        req.site._id,
        req.userData
      );
      if (!savedUserSite) {
        throw new AppError(
          "Faild to assign site to user. Please Try again",
          STATUS_CODES.INTERNAL_SERVER_ERROR
        );
      }
    } else {
      // method to just add a mapping for site assignment
      const savedSiteAssignment = await siteMappingService.addNewSiteAssignment(
        req.site._id,
        req.userData
      );

      if (!savedSiteAssignment) {
        throw new AppError(
          "Faild to assign site to user. Please Try again",
          STATUS_CODES.INTERNAL_SERVER_ERROR
        );
      }
    }

    res
      .status(STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ message: "Successfully assigned site to user" });
  } catch (error) {
    next(error);
  }
};

// Get all sites assigned of login user ---PENDING
export const getSitesForCurrentUser = async (req, res, next) => {
  try {
    // get user
    // get sites
    // return
  } catch (error) {
    next(error);
  }
};

// Get all sites assigned of login user (minimal data like id, name etc) ---PENDING
export const getSitesForCurrentUserMinimal = async (req, res, next) => {
  try {
    // get user
    // get sites
    // return limited fileds
  } catch (error) {
    next(error);
  }
};

// Get all sites assigned of selected user ---PENDING
export const getAssignedSitesForUser = async (req, res, next) => {
  try {
    // get user
    // get sites
    // return
  } catch (error) {
    next(error);
  }
};

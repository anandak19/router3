import { STATUS_CODES } from "../../constants/statusCodes.js";
import profileService from "../../services/profile/profile.service.js";

// add new profile on selcted site ---TESTING
export const addSiteProfile = async (req, res, next) => {
  try {
    const savedProfile = await profileService.addNewProfile(
      req.profileData,
      req.site._id,
      req.user._id
    );
    if (!savedProfile) {
      throw new CustomError(
        "Failed to add profile.",
        STATUS_CODES.INTERNAL_SERVER_ERROR
      );
    }
    res
      .status(STATUS_CODES.CREATED)
      .json({
        message: `New profile: ${savedProfile.profile} added successfully`,
      });
  } catch (error) {
    next(error);
  }
};

// get profiles of selcted site ---PENDING
export const getProfileBySite = async (req, res, next) => {
  try {
    // get site
    // find profiles with given site id
    // return
  } catch (error) {
    next(error);
  }
};

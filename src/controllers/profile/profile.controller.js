import { STATUS_CODES } from "../../constants/statusCodes.js";
import profileService from "../../services/profile/profile.service.js";
import { AppError } from "../../utils/appError.js";

// add new profile on selcted site ---TESTED OK
export const addSiteProfile = async (req, res, next) => {
  try {
    const savedProfile = await profileService.addNewProfile(
      req.profileData,
      req.site._id,
      req.user._id
    );
    if (!savedProfile) {
      throw new AppError(
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
export const getProfilesBySite = async (req, res, next) => {
  try {
    const profiles = await profileService.getProfilesOfSite(req.site._id)
    if(!profiles){
      throw new AppError("Faild to get site profiles", STATUS_CODES.INTERNAL_SERVER_ERROR)
    }

    res.status(STATUS_CODES.SUCCESS).json({message: "Fetched profiles successfully", profiles})
  } catch (error) {
    next(error);
  }
};

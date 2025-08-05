import { STATUS_CODES } from "../../constants/statusCodes.js";
import { AppError } from "../../utils/appError.js";

// validate new profile details and save it to req.profileData
export const validateNewProfile = async (req, res, next) => {
  try {
    const { profile, cost } = req.body;

    if (!profile || !profile.trim()) {
      throw new AppError(
        "Profile key is required",
        STATUS_CODES.BAD_REQUEST
      );
    }

    const numericCost = Number(cost);
    if (cost === undefined || Number.isNaN(numericCost)) {
      throw new AppError(
        "Cost is required and must be a valid number",
        STATUS_CODES.BAD_REQUEST
      );
    }

    const trimmedProfile = profile.trim();

    if (trimmedProfile.length > 15 || trimmedProfile.length < 2) {
      throw new AppError(
        "Profile name must be between 2 and 15 characters",
        STATUS_CODES.BAD_REQUEST
      );
    }

    if (numericCost < 0) {
      throw new AppError(
        "Cost must be a positive number",
        STATUS_CODES.BAD_REQUEST
      );
    }

    req.profileData = {
      profile: trimmedProfile,
      cost: numericCost,
    };
    return next();
  } catch (error) {
    next(error);
  }
};

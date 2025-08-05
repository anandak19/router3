import { STATUS_CODES } from "../../constants/statusCodes.js";
import { buildNewProfile } from "../../repositories/profile/profile.builder.js";
import profileRepositry from "../../repositories/profile/profile.repositry.js";
import { CustomError } from "../../utils/customError.js";

class ProfileService {
  async addNewProfile(profileData, siteId, userId) {
    try {
      // check for same profile existance
      const existingProfile = await profileRepositry.getProfile(
        profileData.profile,
        siteId
      );
      if (existingProfile) {
        throw new CustomError(
          `Profile: ${profileData.profile} already exists in this site`,
          STATUS_CODES.CONFLICT
        );
      }

      const newProfile = buildNewProfile(profileData, siteId, userId);
      if (!newProfile)
        throw new CustomError(
          "Faild to create new profile",
          STATUS_CODES.INTERNAL_SERVER_ERROR
        );

      const savedProfile = await profileRepositry.saveProfile(newProfile);
      if (!savedProfile) {
        throw new CustomError(
          "Faild to save profile",
          STATUS_CODES.INTERNAL_SERVER_ERROR
        );
      }

      return savedProfile;
    } catch (error) {
      throw error;
    }
  }
}

export default new ProfileService()

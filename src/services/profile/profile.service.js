import { STATUS_CODES } from "../../constants/statusCodes.js";
import { buildNewProfile } from "../../repositories/profile/profile.builder.js";
import profileRepositry from "../../repositories/profile/profile.repositry.js";
import { AppError } from "../../utils/appError.js";

class ProfileService {
  async addNewProfile(profileData, siteId, userId) {
    try {
      // check for same profile existance
      const existingProfile = await profileRepositry.getProfile(
        profileData.profile,
        siteId
      );
      if (existingProfile) {
        throw new AppError(
          `Profile: ${profileData.profile} already exists in this site`,
          STATUS_CODES.CONFLICT
        );
      }

      const newProfile = buildNewProfile(profileData, siteId, userId);
      if (!newProfile)
        throw new AppError(
          "Faild to create new profile",
          STATUS_CODES.INTERNAL_SERVER_ERROR
        );

      const savedProfile = await profileRepositry.saveProfile(newProfile);
      if (!savedProfile) {
        throw new AppError(
          "Faild to save profile",
          STATUS_CODES.INTERNAL_SERVER_ERROR
        );
      }

      return savedProfile;
    } catch (error) {
      throw error;
    }
  }

  async getProfilesOfSite(siteId){
    try {
      const profiles = profileRepositry.getSiteProfiles(siteId)
      if(!profiles){
        throw new AppError("Faild to get site profiles", STATUS_CODES.INTERNAL_SERVER_ERROR)
      }
      return profiles
    } catch (error) {
      throw error
    }
  }
}

export default new ProfileService()

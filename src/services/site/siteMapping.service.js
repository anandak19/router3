import { STATUS_CODES } from "../../constants/statusCodes.js";
import {
  buildSiteAssignment,
  buildUserSite,
} from "../../repositories/site/site.builder.js";
import siteAssignmentRepository from "../../repositories/site/siteAssignment.repository.js";
import userSiteRepository from "../../repositories/site/userSite.repository.js";
import { AppError } from "../../utils/appError.js";

class SiteMappingService {
  // site id should be ObjectId
  async addNewSiteAssignment(siteId, user) {
    try {
      if (await siteAssignmentRepository.hasSiteAssignment(user._id)) {
        // call repositroy method to add siteId to users assignement doc
        const updatedAssignment =
          await siteAssignmentRepository.addNewSiteAssignment(siteId, user._id);
        if (!updatedAssignment) {
          throw new AppError(
            "Faild to add site to user",
            STATUS_CODES.INTERNAL_SERVER_ERROR
          );
        }
        return updatedAssignment;
      } else {
        // build site assignment
        const newSiteAssignment = buildSiteAssignment(
          siteId,
          user._id,
          user.userRole
        );
        console.log(newSiteAssignment)
        if (!newSiteAssignment) {
          throw new AppError(
            "Faild to assign site to user",
            STATUS_CODES.INTERNAL_SERVER_ERROR
          );
        }
        const savedSiteAssignment =
          await siteAssignmentRepository.createNewSiteAssignment(
            newSiteAssignment
          );
        if (!savedSiteAssignment) {
          throw new AppError(
            "Faild to assign site to user",
            STATUS_CODES.INTERNAL_SERVER_ERROR
          );
        }
        return savedSiteAssignment;
      }
    } catch (error) {
      throw error;
    }
  }

  async createUserSite(siteId, user) {
    try {
      // check for user site existance
      const existingUserSite = await userSiteRepository.getUserSite(
        user._id,
        siteId
      );
      if (existingUserSite) {
        throw new AppError(
          "Provided site is already assigned to user",
          STATUS_CODES.CONFLICT
        );
      }
      // build user site document
      const newUserSite = buildUserSite(siteId, user._id, user.userRole);
      // save user site docuemt
      const savedUserSite = await userSiteRepository.saveNewUserSite(
        newUserSite
      );
      if (!savedUserSite) {
        throw new AppError(
          "Faild to assign site to user! Try agin",
          STATUS_CODES.INTERNAL_SERVER_ERROR
        );
      }
      // return saved document
      return savedUserSite
    } catch (error) {
      throw error;
    }
  }
}

export default new SiteMappingService();

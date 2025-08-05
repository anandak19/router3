import { STATUS_CODES } from "../../constants/statusCodes.js";
import { buildSite } from "../../repositories/site/site.builder.js";
import { CustomError } from "../../utils/customError.js";
import siteRepository from "../../repositories/site/site.repository.js";

class SiteService {
  async createSite(siteData, addedBy) {
    const existingSite = await siteRepository.isSiteExists(siteData);
    if (existingSite) {
      throw new CustomError(
        "A site with this name already exists",
        STATUS_CODES.CONFLICT
      );
    }

    const newSite = buildSite(siteData, addedBy);
    const savedSite = await siteRepository.saveSite(newSite);
    if (!savedSite) {
      throw new CustomError(
        "Failed to save site",
        STATUS_CODES.INTERNAL_SERVER_ERROR
      );
    }

    return savedSite;
  }

  async getSites(userId = null) {
    try {
      const sites = await siteRepository.getAllSites();
      if (!sites) {
        throw new CustomError("No sites found", STATUS_CODES.NOT_FOUND);
      }
      return sites;
    } catch (error) {
      throw error;
    }
  }

  async getSiteById(siteId) {
    try {
      const site = await siteRepository.getSiteById(siteId);

      if(!site){
        throw new CustomError("Site not found", STATUS_CODES.NOT_FOUND);
      }

      return site;
      
    } catch (error) {
      throw error
    }
  }
}

export default new SiteService();

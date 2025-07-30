import { STATUS_CODES } from "../../constants/statusCodes.js"
import { buildSite } from "../../repositories/site/site.builder.js"
import { isSiteExists, saveSite } from "../../repositories/site/site.repository.js"
import { CustomError } from "../../utils/customError.js"


export const createSite = async (siteData, addedBy) => {
  const existingSite = await isSiteExists(siteData);
  if (existingSite) {
    throw new CustomError("A site with this name already exists", STATUS_CODES.CONFLICT);
  }

  const newSite = buildSite(siteData, addedBy);
  const savedSite = await saveSite(newSite);

  if (!savedSite) {
    throw new CustomError("Failed to save site", STATUS_CODES.INTERNAL_SERVER_ERROR);
  }

  return savedSite;
};

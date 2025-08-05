import siteService from "../../services/site/site.service.js";

export const varifySite = async (req, res, next) => {
  try {
    const siteId = req.params.id;
    const siteData = await siteService.getSiteById(siteId);

    req.site = siteData;
    return next()
  } catch (error) {
    next(error);
  }
};

import Site from "../../models/Site.js";

class SiteRepository {
  async isSiteExists(newSite, session = null) {
    return session
      ? await Site.findOne({ siteName: newSite.siteName }).session(session)
      : await Site.findOne({ siteName: newSite.siteName });
  }

  async saveSite(newSite, session = null){
    return await newSite.save(session ? { session } : {});
  }

  async getAllSites(){
    return await Site.find();
  }

  async getUsersSite(userId){
    return await Site.find({addedBy: userId})
  }

  async getSiteById(id){
    return await Site.findById(id);
  }
}

export default new SiteRepository()
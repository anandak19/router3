import Site from "../../models/Site.js"

//save site
export const saveSite = async (newSite, session = null) => {
    return await newSite.save(session ? {session}: {})
}

//check if site exists
export const isSiteExists = async (newSite, session = null) => {
  return session
    ? await Site.findOne({ siteName: newSite.siteName }).session(session)
    : await Site.findOne({ siteName: newSite.siteName });
};

//get all sites


// get site by id
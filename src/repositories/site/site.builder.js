import Site from "../../models/Site.js"


// build site docuement
export const buildSite = (siteData, addedBy) => {
    return new Site({
        addedBy,
        siteName: siteData.siteName,
        country: siteData.country,
        location: siteData.location,
        currency: siteData.currency, 
        dns: siteData.dns,
        port: siteData.port,
        callerId: siteData?.callerId,
        userName: siteData.userName,
        password: siteData.password
    })
}
import Site from "../../models/Site.js"
import SiteAssignments from "../../models/SiteAssignments.js"
import UserSite from "../../models/UserSite.js"


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

export const buildSiteAssignment = (siteId, userId, userRole) => {
    return new SiteAssignments({
        userId,
        userRole,
        assignedSites: [siteId]
    })
}

export const buildUserSite = (siteId, userId, userRole) => {
    return new UserSite({
        userId,
        siteId,
        userRole
    })
}
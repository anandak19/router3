import Profile from '../../models/Profile.js'

export const buildNewProfile = (profileData, siteId, userId) => {
    return new Profile({
        profile: profileData.profile,
        cost: profileData.cost,
        siteId,
        userId,
    })
}
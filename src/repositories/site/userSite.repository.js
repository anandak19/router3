import UserSite from "../../models/UserSite.js"

class UserSiteRepository{
    async saveNewUserSite(newUserSite){
        return await newUserSite.save()
    }

    async getUserSite(userId, siteId){
        return await UserSite.findOne({userId, siteId})
    }
}

export default new UserSiteRepository()
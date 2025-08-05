import Profile from "../../models/Profile.js";
import { buildNewProfile } from "./profile.builder.js";


class ProfileRepository {

    //save profile
    async saveProfile(newProfile, session = null) {
        return await newProfile.save(session ? {session} : {})
    }

    async getSiteProfiles(siteId){
        return await Profile.find({siteId})
    }

    async getProfile(profile, siteId){
        return await Profile.findOne({profile, siteId})
    }
}

export default new ProfileRepository()
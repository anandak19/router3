import Accountant from "../../models/roleModels/Accountant.js";
import CashCollector from "../../models/roleModels/CashCollector.js";
import Staff from "../../models/roleModels/Staff.js";
import User from "../../models/User.js";

// keep this and remove others 
class UserRepository{
    async saveUser(newUser, session = null){
        return await newUser.save(session ? {session}: {})
    }

    async getUserById(userId){
        return await User.findById(userId)
    }

    async getUserByEmail(email){
        return await User.findOne({email})
    }

    async findByRoleAndUniqueFields(userRole, email, phoneNumber, userName){
        return await User.findOne({
            userRole,
            $or: [
                {email},
                {phoneNumber},
                {userName}
            ]
        })
    }

    async saveStaff(userId, session){
        return await Staff.create([{userId}], { session });
    }

    async saveCashCollector(userId, session){
        return await CashCollector.create([{userId}], { session });
    }

    async saveAccountant(userId, session){
        return await Accountant.create([{userId}], { session });
    }
}

export default new UserRepository()
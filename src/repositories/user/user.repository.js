import Accountant from "../../models/roleModels/Accountant.js";
import CashCollector from "../../models/roleModels/CashCollector.js";
import Staff from "../../models/roleModels/Staff.js";
import User from "../../models/User.js";

export const saveUser = async(newUser, session = null) => {
    return await newUser.save(session ? {session}: {})
}

export const getUserByEmail = async(email) => {
    return await User.findOne({email})
}

export const saveStaff = async(userId, session) => {
    return await Staff.create([{userId}], { session });
}

export const saveCashCollector = async(userId, session) => {
    return await CashCollector.create([{userId}], { session });
}

export const saveAccountant = async(userId, session) => {
    return await Accountant.create([{userId}], { session });
}
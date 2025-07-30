import mongoose from "mongoose";
import { STATUS_CODES } from "../../constants/statusCodes.js";
import { USER_ROLES } from "../../constants/userRoles.js";
import { buildUser } from "../../repositories/user/user.builder.js";
import {
  getUserByEmail,
  saveAccountant,
  saveCashCollector,
  saveStaff,
  saveUser,
} from "../../repositories/user/user.repository.js";
import { CustomError } from "../../utils/customError.js";

// create a new user
export const createUser = async (userData, addedBy) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const newUser = buildUser(userData, addedBy);
    const savedUser = await saveUser(newUser, session);
    if (!savedUser) {
      throw new CustomError(
        "Faild to create user",
        STATUS_CODES.INTERNAL_SERVER_ERROR
      );
    }

    switch (savedUser.userRole) {
      case USER_ROLES.STAFF:
        await saveStaff(savedUser._id, session);
        break;
      case USER_ROLES.CASH_COLLECTOR:
        await saveCashCollector(savedUser._id, session);
        break;
      case USER_ROLES.ACCOUNTANT:
        await saveAccountant(savedUser._id, session);
        break;
      case USER_ROLES.ADMIN:
      case USER_ROLES.SUB_ADMIN:
      case USER_ROLES.PARTNER:
      case USER_ROLES.COUPON_ADDING_STAFF:
        break;
      default:
        throw new CustomError("Invalid or unsupported user role ");
    }

    await session.commitTransaction();
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
};

export const varifyUserPassword = async (email, password) => {
  try {
    const userData = await getUserByEmail(email);

    if(!userData){
      throw new CustomError("User not found", STATUS_CODES.BAD_REQUEST);
    }

    const isMatch = password === userData.password;
    if (!isMatch) {
      throw new CustomError("Incorrect password", STATUS_CODES.BAD_REQUEST);
    }

    return userData
  } catch (error) {
    throw error;
  }
};

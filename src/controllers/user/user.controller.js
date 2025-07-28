import mongoose from "mongoose";
import User from "../../models/User.js";
import Staff from "../../models/roleModels/Staff.js";
import Accountant from "../../models/roleModels/Accountant.js";
import CashCollector from "../../models/roleModels/CashCollector.js";
import { STATUS_CODES } from "../../constants/statusCodes.js";
import { CustomError } from "../../utils/customError.js";
import { USER_ROLES } from "../../constants/userRoles.js";

// add user 
export const AddUser = async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const { email, phoneNumber, userName, password, userRole } = req.newUser;

    const newUser = new User({
      email,
      phoneNumber,
      userName,
      password,
      addedBy: req.user._id,
      userRole,
    });

    await newUser.save({ session });

    switch (userRole) {
      case USER_ROLES.STAFF:
        await new Staff({ userId: newUser._id }).save({ session });
        break;
      case USER_ROLES.CASH_COLLECTOR:
        await new CashCollector({ userId: newUser._id }).save({ session });
        break;
      case USER_ROLES.ACCOUNTANT:
        await new Accountant({ userId: newUser._id }).save({ session });
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

    res
      .status(STATUS_CODES.CREATED)
      .json({ message: "User added successfully" });
  } catch (error) {
    await session.abortTransaction();
    next(error);
  } finally {
    session.endSession();
  }
};

// edit user ---pending
export const saveUpdatedUser = async (req, res, next) =>{
  try {
    // get user data from user.userData
    // find the user from db
    // save the updated user 
  } catch (error) {
    next(error)
  }
}

// suspend user ---pending
export const suspendUserAccount = async (req, res, next) => {
  try {
    // get user id
    // find user
    // mark as suspended and save
  } catch (error) {
    next(error)
  }
} 

// activate user ---pending
export const activateUserAccount = async (req, res, next) => {
  try {
    // get user id
    // find user
    // mark as active and save
  } catch (error) {
    next(error)
  }
} 

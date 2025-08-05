import { STATUS_CODES } from "../../constants/statusCodes.js";
import userService from "../../services/user/user.service.js";

// add user
export const AddUser = async (req, res, next) => {
  try {
    await userService.createUser(req.newUser)

    res
      .status(STATUS_CODES.CREATED)
      .json({ message: "User added successfully" });
  } catch (error) {
    next(error);
  }
};

// edit user ---pending
export const saveUpdatedUser = async (req, res, next) => {
  try {
    // get user data from user.userData
    // find the user from db
    // save the updated user
  } catch (error) {
    next(error);
  }
};

// suspend user ---pending
export const suspendUserAccount = async (req, res, next) => {
  try {
    // get user id
    // find user
    // mark as suspended and save
  } catch (error) {
    next(error);
  }
};

// activate user ---pending
export const activateUserAccount = async (req, res, next) => {
  try {
    // get user id
    // find user
    // mark as active and save
  } catch (error) {
    next(error);
  }
};

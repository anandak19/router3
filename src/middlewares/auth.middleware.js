import { STATUS_CODES } from "../constants/statusCodes.js";
import { appUsers, siteUsers, USER_ROLES } from "../constants/userRoles.js";
import { varifyUserPassword } from "../services/user/user.service.js";
import { CustomError } from "../utils/customError.js";

// validate login data and varify password
export const validateLoginData = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email?.trim() || !password?.trim()) {
      throw new CustomError(
        "Please enter credentials",
        STATUS_CODES.BAD_REQUEST
      );
    }

    // call validate user with password service method
    const userData = varifyUserPassword(email, password)

    req.user = userData;
    return next();
  } catch (error) {
    next(error);
  }
};

// check if SITE allowed role
export const authorizeSiteUser = async (req, res, next) => {
  try {
    const userData = req.user;
    if(appUsers.includes(userData.userRole)){
      throw new CustomError("Access Denied", STATUS_CODES.UNAUTHORIZED)
    }
    return next()
  } catch (error) {
    next(error);
  }
};

// check if APP allowed role
export const authorizeAppUser = async (req, res, next) => {
  try {
    const userData = req.user;
    if(siteUsers.includes(userData.userRole)){
      throw new CustomError("Access Denied", STATUS_CODES.UNAUTHORIZED)
    }
    return next()
  } catch (error) {
    next(error);
  }
};

// check if the role is admin
export const authorizeAdmin = async (req, res, next) => {
  try {
    const user = req.user;

    if (!user || user.userRole !== USER_ROLES.ADMIN) {
      throw new CustomError("Access Denied", STATUS_CODES.UNAUTHORIZED);
    }

    return next();
  } catch (error) {
    next(error);
  }
};

// check if the role is sub admin
export const authorizeSubAdmin = async (req, res, next) => {
  try {
    const user = req.user;

    if (!user || user.userRole !== USER_ROLES.SUB_ADMIN) {
      throw new CustomError("Access Denied", STATUS_CODES.UNAUTHORIZED);
    }

    return next();
  } catch (error) {
    next(error);
  }
};

// check if the role is cash collector
export const authorizeCashCollector = async (req, res, next) => {
  try {
    const user = req.user;

    if (!user || user.userRole !== USER_ROLES.CASH_COLLECTOR) {
      throw new CustomError("Access Denied", STATUS_CODES.UNAUTHORIZED);
    }

    return next();
  } catch (error) {
    next(error);
  }
};

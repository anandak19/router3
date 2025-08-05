import { STATUS_CODES } from "../../constants/statusCodes.js";
import userService from "../../services/user/user.service.js";
import { CustomError } from "../../utils/customError.js";
import {
  validateEmail,
  validatePassword,
} from "../../utils/userUtils/userDataValidators.js";

export const validateNewUser = async (req, _res, next) => {
  try {
    const { email, phoneNumber, userName, password, userRole } = req.body;

    const emailResult = await validateEmail(email, true);
    if (!emailResult.valid)
      throw new CustomError(emailResult.message, STATUS_CODES.BAD_REQUEST);

    const passwordResult = validatePassword(password);
    if (!passwordResult.valid)
      throw new CustomError(passwordResult.message, STATUS_CODES.BAD_REQUEST);

    // add phonenumber validation, username, and user role validationsv --- here

    req.newUser = {
      email: email.trim(),
      phoneNumber: phoneNumber.trim(),
      userName: userName.trim(),
      password: password.trim(),
      userRole,
    };
    return next();
  } catch (error) {
    next(error);
  }
};

export const checkUserExistance = async (req, res, next) => {
  try {
    await userService.checkUserExistsByRoleOrFields(req.newUser)
    return next();
  } catch (error) {
    next(error);
  }
};

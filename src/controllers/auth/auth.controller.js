import { STATUS_CODES } from "../../constants/statusCodes.js";
import { USER_ROLES } from "../../constants/userRoles.js";
import User from "../../models/User.js";
import { CustomError } from "../../utils/customError.js";
import { hashPassword } from "../../utils/userUtils/hash.js";
import { generateToken } from "../../utils/userUtils/jwt.js";

// login user, send token, some user data 
export const loginUser = async (req, res, next) => {
  try {
    const userData = req.user;
    const token = generateToken(userData);

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: userData._id,
        email: userData.email,
        userRole: userData.userRole,
        userName: userData.userName,
      },
    });
  } catch (error) {
    next(error)
  }
};
 
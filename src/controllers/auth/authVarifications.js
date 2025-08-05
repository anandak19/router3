import { STATUS_CODES } from "../../constants/statusCodes.js";
import { AppError } from "../../utils/appError.js";
import { verifyToken } from "../../utils/userUtils/jwt.js";
import userService from "../../services/user/user.service.js";

// for token validation, and finding user data
export const validateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new AppError(
        "Authorization header is missing",
        STATUS_CODES.BAD_REQUEST
      );
    }

    // Verify the format is 'Bearer <token>'
    const parts = authHeader.split(" ");
    if (parts.length !== 2 || parts[0] !== "Bearer") {
      throw new AppError("Invalid token format", STATUS_CODES.BAD_REQUEST);
    }

    const token = parts[1];
    const decoded = verifyToken(token)

    const user = await userService.getUserById(decoded.id)
    if (!user) {
      throw new AppError("Access denied!", STATUS_CODES.UNAUTHORIZED);
    }

    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
};

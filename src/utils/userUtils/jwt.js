import jwt from "jsonwebtoken";
import 'dotenv/config'
import { AppError } from "../appError.js";

export const generateToken = (user, expiresIn = "7d") => {
  const payload = {
    id: user._id,
    userRole: user.userRole,
    userName: user.userName,
  };

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
};


export const verifyToken = (token) => {
  try {
    if (!token) {
      throw new AppError("No token provided", STATUS_CODES.UNAUTHORIZED);
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (err) {
    throw new AppError("Invalid or expired token", STATUS_CODES.UNAUTHORIZED);
  }
};
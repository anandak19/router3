import { STATUS_CODES } from "../constants/statusCodes.js";

export default async (error, _req, res, _next) => {
  let statusCode = error.statusCode || STATUS_CODES.INTERNAL_SERVER_ERROR;
  let message = error.message || "Internal Server Error";
  console.log(error.message);
  console.log(error);
  res.status(statusCode).json({ success: false, error: message });
};

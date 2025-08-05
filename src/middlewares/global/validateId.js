import { STATUS_CODES } from "../../constants/statusCodes.js";
import { AppError } from "../../utils/appError.js";
import validatorsService from "../../services/global/validators.service.js";

export const validateParamId = (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
        throw new AppError("Missing ID in request parameters.", STATUS_CODES.BAD_REQUEST)
    }

    // call service to check the id type
    if(!validatorsService.isValidId(id)){
      throw new AppError("Invalid ObjectId.", STATUS_CODES.BAD_REQUEST)
    }

    return next();
  } catch (error) {
    next(error);
  }
};

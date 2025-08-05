import { STATUS_CODES } from "../../constants/statusCodes.js";
import { CustomError } from "../../utils/customError.js";
import validatorsService from "../../services/global/validators.service.js";

export const validateParamId = (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
        throw new CustomError("Missing ID in request parameters.", STATUS_CODES.BAD_REQUEST)
    }

    // call service to check the id type
    console.log(validatorsService.isValidId(id))
    if(!validatorsService.isValidId(id)){
      throw new CustomError("Invalid ObjectId.", STATUS_CODES.BAD_REQUEST)
    }

    return next();
  } catch (error) {
    next(error);
  }
};

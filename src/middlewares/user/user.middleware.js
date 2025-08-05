import { STATUS_CODES } from "../../constants/statusCodes.js"
import userService from "../../services/user/user.service.js"
import { AppError } from "../../utils/appError.js"

export const findUser = async (req, res, next) => {
    try {
        const {email} = req.body

        if(!email){
            throw new AppError("Please profile the email of the user to assign", STATUS_CODES.BAD_REQUEST)
        }

        const user = await userService.getUserByEmail(email)
        req.userData = user
        return next()
    } catch (error) {
        next(error)
    }
}
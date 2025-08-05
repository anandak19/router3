import { STATUS_CODES } from "../constants/statusCodes.js"

export class AppError extends Error{
    constructor(message, statusCode){
        super(message)
        this.statusCode = statusCode || STATUS_CODES.INTERNAL_SERVER_ERROR
    }
}
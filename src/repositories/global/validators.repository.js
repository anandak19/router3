import mongoose from "mongoose";

class ValidatorsRepository{

    isValidId(id){
        return mongoose.Types.ObjectId.isValid(id)
    }
}

export default new ValidatorsRepository()
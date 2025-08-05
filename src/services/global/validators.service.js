import validatorsRepository from "../../repositories/global/validators.repository.js";

class DbValidatorsService{
    isValidId(id){
        return validatorsRepository.isValidId(id)
    }
}

export default new DbValidatorsService()
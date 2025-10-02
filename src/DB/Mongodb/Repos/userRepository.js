
export class UserRepository {
    constructor(userModel) {
        this.userModel = userModel
    }
    create = async (userData) => {
        return await this.userModel.create(userData)
    }

    findByEmail = async (email) => {
        return await this.userModel.findOne({email})
    }

}


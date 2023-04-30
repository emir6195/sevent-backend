const userModel = require('../database/user.model');

class User {
    constructor(params = {}) {
        this.params = params;
    }

    async create() {
        return await userModel.create(this.params);
    }

    async readOne() {
        return await userModel.findOne({ _id: this.params._id }) || [];
    }

    async update() {
        return await userModel.updateOne({ _id: this.params?._id }, this.params);
    }

    async delete() {
        return await userModel.deleteOne({ _id: this.params?._id });
    }
}

module.exports = User;
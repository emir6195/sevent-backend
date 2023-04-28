const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name: { type: mongoose.Schema.Types.String, required: true },
        surname: { type: mongoose.Schema.Types.String, required: true },
        email: { type: mongoose.Schema.Types.String, required: true },
        password: { type: mongoose.Schema.Types.String, required: true },
        phone: { type: mongoose.Schema.Types.String, required: false },
        type: { type: mongoose.Schema.Types.String, required: true },
        location: {
            address: { type: mongoose.Schema.Types.String, required: false },
            longitude: { type: mongoose.Schema.Types.Number, required: false },
            latitude: { type: mongoose.Schema.Types.Number, required: false },
        },
        demographicInfo: {
            age: { type: mongoose.Schema.Types.Number, required: false },
            gender: { type: mongoose.Schema.Types.String, required: false },
            occupation: { type: mongoose.Schema.Types.String, required: false },
        },
        behavior: {
            eventsAttended: [{ type: mongoose.Schema.Types.ObjectId, required: false }],
            searches: [{ type: mongoose.Schema.Types.String, required: false }],
            timeSpent: { type: mongoose.Schema.Types.Number, required: false }
        },
        preferences: { type: mongoose.Schema.Types.Mixed, required: false }
    },
    { timestamps: true }
);

module.exports = mongoose.model("users", UserSchema);
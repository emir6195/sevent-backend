const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
    {
        ownerId: { type: mongoose.Schema.Types.ObjectId, required: true },
        name: { type: mongoose.Schema.Types.String, required: true },
        category: { type: mongoose.Schema.Types.String, required: true },
        subcategory: { type: mongoose.Schema.Types.String, required: true },
        details: { type: mongoose.Schema.Types.String, required: true },
        type: { type: mongoose.Schema.Types.String, required: true },
        isLimited: { type: mongoose.Schema.Types.Boolean, required: false, default: false },
        participantLimit: { type: mongoose.Schema.Types.Number, required: false },
        participants: [
            {
                userId: { type: mongoose.Schema.Types.ObjectId, required: true },
                createdAt: { type: mongoose.Schema.Types.Date, required: false, default: Date.now },
                isAttended: { type: mongoose.Schema.Types.Boolean, required: false },
            }
        ],
        invitees: [
            {
                userId: { type: mongoose.Schema.Types.ObjectId, required: true },
                createdAt: { type: mongoose.Schema.Types.Date, required: false, default: Date.now },
            }
        ],
        isFree: { type: mongoose.Schema.Types.Boolean, required: false, default: true },
        ticketPrice: { type: mongoose.Schema.Types.Number, required: false, default: 0 },
        ticketPriceCurrency: { type: mongoose.Schema.Types.String, required: false, default: "TRY" },
        isOnline: { type: mongoose.Schema.Types.Boolean, required: true },
        location: {
            address: { type: mongoose.Schema.Types.String, required: true },
            longitude: { type: mongoose.Schema.Types.Number, required: function () { return !this.isOnline; } },
            latitude: { type: mongoose.Schema.Types.Number, required: function () { return !this.isOnline; } },
        },
        beginDate: { type: mongoose.Schema.Types.Date, required: true },
        endDate: { type: mongoose.Schema.Types.Date, required: true },
        contents: [
            {
                type: { type: mongoose.Schema.Types.String, required: true, validate: { validator: contentsValidator } },
                src: { type: mongoose.Schema.Types.String, required: true }
            }
        ]
    },
    { timestamps: true }
);

function contentsValidator(value) {
    if (value == "VIDEO" || value == "IMAGE") {
        return true;
    } else {
        return false;
    }
}

module.exports = mongoose.model("events", EventSchema);
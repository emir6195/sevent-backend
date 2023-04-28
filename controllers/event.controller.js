const eventModel = require('../database/event.model');

class Event {
    constructor(params = {}) {
        this.params = params;
    }

    async create() {
        return await eventModel.create(this.params);
    }

    async readOne() {
        return await eventModel.findOne({ _id: this.params._id }) || [];
    }

    async readAll() {
        return await eventModel.find({});
    }

    async update() {
        return await eventModel.updateOne({ _id: this.params?._id }, this.params);
    }

    async pushInvitee() {
        return await eventModel.updateOne({ _id: this.params?._id }, { $push: { invitees: this.params.invitees } });
    }

    async pushAttendee() {
        return await eventModel.updateOne({ _id: this.params?._id }, { $push: { attendees: this.params.attendees } });
    }

    async pushContent() {
        return await eventModel.updateOne({ _id: this.params?._id }, { $push: { contents: this.params.contents } });
    }

    async delete() {
        return await eventModel.deleteOne({ _id: this.params?._id });
    }
}

module.exports = Event;
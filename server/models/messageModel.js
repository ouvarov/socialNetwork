const {Schema, model } = require('mongoose');

const messageModel = new Schema({
    id: {type: String},
    userId: {type: String},
    text: {type: String},
    createDate: {type: String},
});

module.exports = model('Message', messageModel)
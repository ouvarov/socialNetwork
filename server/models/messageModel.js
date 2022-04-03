const {Schema, model } = require('mongoose');

const messageModel = new Schema({
    id: {type: String},
    userInfo: {type: Schema.Types.ObjectId, ref: 'User', default: {}},
    text: {type: String},
    createDate: {type: String},
});

module.exports = model('Message', messageModel);

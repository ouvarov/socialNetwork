const {Schema, model } = require('mongoose');

const chatModel = new Schema({
    id: { type: String },
    users: {type: Array},
    messages: {type: Schema.Types.Array, ref: 'Message', default: []},
});

module.exports = model('Chat', chatModel);

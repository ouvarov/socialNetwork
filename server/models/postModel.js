const {Schema, model } = require('mongoose');

const PostSchema = new Schema({
	ownerId: {type: String},
	text: {type: String, required: true},
	image: {type: String},
	id: {type: String},
	likes: {type: Array, default: []}
});

module.exports = model('Post', PostSchema)

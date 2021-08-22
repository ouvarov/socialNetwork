const {Schema, model } = require('mongoose');

const UserSchema = new Schema({
	email: { type: String, unique: true, required: true},
	password: { type: String, required: true},
	userName: { type: String, required: true },
	imageUrl: {type: String, default: null},
	subscribers: {type: Array, default: []},
	followers: {type: Array, default: []},
	description: {type: String, default: null},
	isActivated: { type: Boolean, default: false},
	activationLink: { type: String},
	created: { type: String },
	id: { type: String },
});

module.exports = model('User', UserSchema);

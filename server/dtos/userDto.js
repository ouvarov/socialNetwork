module.exports = class UserDto {
	email;
	id;
	isActivated;
	imageUrl;
	userName;
	subscribers;
	followers;
	activationLink;
	created;

	constructor(model) {
		this.email = model.email;
		this.id = model._id;
		this.userName = model.userName
		this.isActivated = model.isActivated;
		this.imageUrl = model.imageUrl;
		this.subscribers = model.subscribers;
		this.followers = model.followers;
		this.activationLink = model.activationLink;
		this.created = model.created;
	}
}

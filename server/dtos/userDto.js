module.exports = class UserDto {
	email;
	id;
	isActivated;
	imageUrl;
	userName;
	following;
	followers;
	activationLink;
	created;

	constructor(model) {
		this.email = model.email;
		this.id = model._id;
		this.userName = model.userName
		this.isActivated = model.isActivated;
		this.imageUrl = model.imageUrl;
		this.following = model.following;
		this.followers = model.followers;
		this.activationLink = model.activationLink;
		this.created = model.created;
	}
}

module.exports = class PostDto {
	ownerId;
	text;
	image;
	id;
	likes;
	constructor(model) {
		this.ownerId = model.ownerId;
		this.text = model.text;
		this.image = model.image;
		this.id = model._id;
		this.likes = model.likes;
	}
}

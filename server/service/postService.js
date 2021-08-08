const PostSchema = require('../models/postModel')


class postService {
	async addPost(ownerId, text, image) {

		const post = await PostSchema.create({ownerId, text, image})

		return post.save();
	}

}

module.exports = new postService();

const PostSchema = require('../models/postModel')


class postService {
	async addPost(ownerId, text, image) {

		const post = await PostSchema.create({ownerId, text, image})

		return post.save();
	}
	async deletePost(postId) {
		const post = await PostSchema.deleteOne({_id: postId});

		return post;
	}
}

module.exports = new postService();

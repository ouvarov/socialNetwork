const PostSchema = require('../models/postModel');
const tokenService = require('../service/tokenServices');


class postServices {
	async addPost(ownerId, text, image) {
		const createDate = new Date;

		const post = await PostSchema.create({ownerId, text, image, createDate})

		return post.save();
	}
	async deletePost(postId) {
		const post = await PostSchema.deleteOne({_id: postId});

		return post;
	}
	async likePost(postId, refreshToken) {
		const userData = tokenService.validationRefreshToken(refreshToken);
		const findPost = await PostSchema.findById(postId);
		const postLikes = findPost.likes;
		const findIndex = postLikes.indexOf(userData.id);

		if (findIndex >= 0) {
			await postLikes.splice(findIndex, 1);
		} else {
			await postLikes.push(userData.id);
		}
		return findPost.save();
	}
}

module.exports = new postServices();

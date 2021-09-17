const PostSchema = require('../models/postModel');
const tokenService = require('../service/tokenService');


class postService {
	async addPost(ownerId, text, image) {

		const post = await PostSchema.create({ownerId, text, image})

		return post.save();
	}
	async deletePost(postId) {
		const post = await PostSchema.deleteOne({_id: postId});

		return post;
	}
	async likePost(postId, refreshToken) {
		const userData = tokenService.validationRefreshToken(refreshToken);
		const findPost = await PostSchema.findById(postId);
		const findLikeId = findPost.likes.filter((userId) => userId === userData.id);

		if (!!findLikeId.length) {
			const findIndex = findLikeId.indexOf(userData.id)

			await findPost.likes.splice(findIndex, 1);
		} else {
			await findPost.likes.push(userData.id);
		}
		return findPost.save()
	}
}

module.exports = new postService();

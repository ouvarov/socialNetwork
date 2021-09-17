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
		const postLikes = findPost.likes;
		const findLikeId = postLikes.filter((userId) => userId === userData.id);

		if (!!findLikeId.length) {
			const findIndex = postLikes.indexOf(userData.id);

			await postLikes.splice(findIndex, 1);
		} else {
			await postLikes.push(userData.id);
		}
		return findPost.save();
	}
}

module.exports = new postService();

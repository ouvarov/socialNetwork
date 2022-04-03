const postService = require('../service/postServices');
const PostDto = require('../dtos/postDto');

class PostControllers {
	async addPost(request, response, next) {
		try {
			const {text, image} = request.body;
			const ownerId = request.params.userId
			const postData = await postService.addPost(ownerId, text, image)
			const post = new PostDto(postData);

			return response.json(post)
		}catch (e) {
			next(e)
		}
	}
	async removePost (request, response, next) {
		try {
			const postId = request.params.postId;
			const postData = await postService.deletePost(postId);

			return response.json(postData)
		} catch (e) {
			next(e)
		}
	}
	async likePost (request, response, next) {
		try {
			const postId = request.params.postId;
			const {refreshToken} = request.cookies;
			const postData = await postService.likePost(postId, refreshToken);
			const postDto = new PostDto(postData);

			return response.json({posts: postDto});
		} catch (e) {
			next(e)
		}
	}
}

module.exports = new PostControllers();

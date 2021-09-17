const postModel = require('../models/postModel');
const postService = require('../service/postService');
const UserModel = require('../models/userModel');
const UserDto = require('../dtos/userDto');
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
	async removePost(request, response, next) {

	}
	async getProfile(request, response, next) {
		try {
			const userId = request.params.userId
			const findAllPosts = await postModel.find({ownerId: userId});
			const getUser = await UserModel.findOne({_id: userId});
			const postDto = findAllPosts.map((item) => new PostDto(item))
			const user = new UserDto(getUser);

			return response.json({user, posts: [...postDto]})
		} catch (e) {
			next(e)
		}
	}
	async deletePost (request, response, next) {
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

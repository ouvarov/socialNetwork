const postModel = require('../models/postModel');
const postService = require('../service/postService');
const UserModel = require('../models/userModel');
const UserDto = require('../dtos/userDto');

class PostControllers {
	async addPost(request, response) {
		const {text, image} = request.body;
		const ownerId = request.params.userId
		const postData = await postService.addPost(ownerId, text, image)

		return response.json(postData)


	}
	async removePost(request, response, next) {

	}
	async getProfile(request, response, next) {
		try {
			const userId = request.params.userId
			const findAllPosts = await postModel.find({ownerId: userId});
			const getUser = await UserModel.findOne({_id: userId});
			const user = new UserDto(getUser);

			return response.json({user, posts: [...findAllPosts]})

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
}

module.exports = new PostControllers();

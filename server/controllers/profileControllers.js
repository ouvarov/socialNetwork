const UserModel = require('../models/userModel');
const postModel = require('../models/postModel');
const UserDto = require('../dtos/userDto');
const PostDto = require('../dtos/postDto');
const profileService = require('../service/profileService')

class ProfileControllers {
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
	async followProfile(request, response, next) {
		try {
			const userId = request.params.userId;
			const {refreshToken} = request.cookies;
			const followData = await profileService.followProfile(userId, refreshToken);

			return response.json(followData);

		} catch (e) {
			next(e)
		}
	}
}

module.exports = new ProfileControllers();

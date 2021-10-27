const UserModel = require('../models/userModel');
const postModel = require('../models/postModel');
const UserDto = require('../dtos/userDto');
const PostDto = require('../dtos/postDto');
const profileService = require('../service/profileServices')

class ProfileControllers {
	async getProfile(request, response, next) {
		try {
			const sortPost = (a, b) =>  {
				if (a.createDate > b.createDate) {
					return 1;
				}
				if (a.createDate < b.createDate) {
					return -1;
				}
				return 0;
			};
			const userId = request.params.userId
			const findAllPosts = await postModel.find({ownerId: userId});
			const getUser = await UserModel.findOne({_id: userId});
			const postDto = findAllPosts.sort((a, b) =>  sortPost(a, b)).map((item) => new PostDto(item));
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

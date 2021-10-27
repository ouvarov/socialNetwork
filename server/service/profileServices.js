const tokenService = require('../service/tokenServices');
const UserModel = require('../models/userModel');
const UserDto = require('../dtos/userDto');


class profileServices {
	async followProfile(userId, refreshToken) {
		const userData = tokenService.validationRefreshToken(refreshToken);
		const followerData = await UserModel.findById(userId);
		const ownerData = await UserModel.findById(userData.id);
		const followerDto = new UserDto(followerData)
		const userDto = new UserDto(ownerData);

		const userFollowers = followerData.followers;
		const ownerFollowing = userDto.following;

		const findIndexFollower = userFollowers.indexOf(userDto.id);

		if (findIndexFollower >= 0) {
			const findIndexFollowing = userFollowers.indexOf(followerDto.id);

			console.log(ownerFollowing)
			await userFollowers.splice(findIndexFollower, 1);
			await ownerFollowing.splice(findIndexFollowing, 1);
		} else {
			await userFollowers.push(userDto.id);
			await ownerFollowing.push(followerDto.id);
		}

		followerData.save()
		ownerData.save()

		return {
			 follower: followerDto,
			 user: userDto,
		};
	}
}

module.exports = new profileServices();

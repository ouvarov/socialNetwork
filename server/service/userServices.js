const bcrypt = require('bcrypt');
const uuid = require('uuid');
const UserModel = require('../models/userModel');
const tokenService = require('../service/tokenServices');
const UserDto = require('../dtos/userDto');
const apiError = require('../exeptions/apiError');

class UserServices {
	async registration(email, password, userName) {
		const candidate = await UserModel.findOne({email})
		if (candidate) {
			throw apiError.BadRequest(`User with mailing address ${email} already exists`)
		}
		const hashPassword = await bcrypt.hash(password, 3);
		const createActivationLink = uuid.v4();
		const activationLink = `${process.env.API_URL}/api/activate/${createActivationLink}`
		const created = new Date();
		const user = await UserModel.create({email, password: hashPassword, userName, activationLink, created})
		const userDto = new UserDto(user);
		const tokens = tokenService.generateTokens({...userDto});

		await tokenService.saveToken(userDto.id, tokens.refreshToken);

		return {...tokens, user: userDto}
	}

	async activate(activationLink) {
		const user = await UserModel.findOne({activationLink});
		if (!user) {
			throw new apiError.BadRequest("Noy correct link")
		}
		user.isActivated = true;
		await user.save();
	}

	async login(email, password) {
		const user = await UserModel.findOne({email});

		if(!user) {
			throw apiError.BadRequest(`User not found with this mail`)
		}

		const isPasswordEquals = await bcrypt.compare(password, user.password);

		if(!isPasswordEquals) {
			throw apiError.BadRequest(`Password not correct`)
		}

		const userDto = new UserDto(user);
		const tokens = tokenService.generateTokens({...userDto});

		await tokenService.saveToken(userDto.id, tokens.refreshToken);

		return {...tokens, user: userDto}

	}
	async logout(refreshToken) {
		const token = await tokenService.remoteToken(refreshToken);

		return token
	}

	async refresh(refreshToken) {
		if(!refreshToken) {
			throw apiError.UnauthorizedError();
		}
		const userData = tokenService.validationRefreshToken(refreshToken);
		const tokenFromDb = tokenService.findToken(refreshToken);
		if(!userData ||!tokenFromDb) {
			throw apiError.UnauthorizedError();
		}
		const user = await UserModel.findById(userData.id)
		const userDto = new UserDto(user);
		const tokens = tokenService.generateTokens({...userDto});

		await tokenService.saveToken(userDto.id, tokens.refreshToken);

		return {...tokens, user: userDto}
	}
	async getUsers() {
		const users = UserModel.find();

		return users;
	}
}

module.exports = new UserServices();

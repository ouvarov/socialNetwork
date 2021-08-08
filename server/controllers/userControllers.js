const userService = require('../service/userService');
const {validationResult} = require('express-validator');
const apiError = require('../exeptions/apiError');

class UserController {
async registration(request, response, next) {
		try {
			const errors = validationResult(request);
			const {email, password, userName} = request.body;
			const userData = await userService.registration(email, password, userName);
			response.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})

			if(!errors.isEmpty()) {
				return next(apiError.BadRequest('validation error', errors.array()));
			}


			return response.json(userData)
		} catch (e) {
			next(e)
		}
	}

	async login(request, response, next) {
		try {
			const {email, password} = request.body;
			const userData = await userService.login(email, password);
			response.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});

			return response.json(userData)
		} catch (e) {
			next(e)
		}
	}

	async logout(request, response, next) {
		try {
			const {refreshToken} = request.cookies;
			const token = await userService.logout(refreshToken);
			response.clearCookie('refreshToken');

			return response.json(token);
		} catch (e) {
			next(e)
		}
	}

	async activated(request, response, next) {
		try {
			const activationLink = request.params.link;
			await userService.activate(`${process.env.API_URL}/api/activate/${activationLink}`);
			return response.redirect(process.env.CLIENT_URL);
		} catch (e) {
			next(e)
		}
	}

	async refreshToken(request, response, next) {
		try {
			const {refreshToken} = request.cookies;
			const userData = await userService.refresh(refreshToken);
			response.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});

			return response.json(userData)

		} catch (e) {
			next(e)
		}
	}

	async getUsers(request, response, next) {
		try {
			const users = await userService.getUser();
			return response.json(users)
		} catch (e) {
			next(e)
		}
	}
}

module.exports = new UserController();

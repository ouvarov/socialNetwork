const jwt = require('jsonwebtoken')
const tokenModel = require('../models/tokenModel');

class TokenService {
	generateTokens(payload) {
		const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '30m'});
		const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30D'});

		return {
			accessToken,
			refreshToken
		}
	}

	async saveToken(userId, refreshToken) {
		const tokenData = await tokenModel.findOne({user: userId});

		if(tokenData) {
			tokenData.refreshToken = refreshToken;
			return tokenData.save();
		}else {
			const newToken = await tokenModel.create({user: userId, refreshToken});

			return newToken;
		}
	}

	validationAccessToken(token) {
		try {
			const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);

			return userData;
		} catch (e) {
			return null;
		}
	}

	validationRefreshToken(token) {
		try {
			const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);

			return userData;
		} catch (e) {
			return null;
		}
	}

	async refreshToken(token) {
		try {
			const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
			return userData;
		} catch (e) {
			return null;
		}
	}

	async remoteToken(refreshToken) {
		const tokenData = await tokenModel.deleteOne({refreshToken})

		return tokenData;
	}

	async findToken(refreshToken) {
		const tokenData = await tokenModel.findOne({refreshToken})

		return tokenData;
	}
}

module.exports = new TokenService();

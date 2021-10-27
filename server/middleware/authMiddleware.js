const apiError = require('../exeptions/apiError');
const tokenService = require('../service/tokenServices');

module.exports = (request, response, next) => {
	try {
		const authorizationHeader = request.headers.authorization;
		const accessToken = authorizationHeader.split(' ')[1];
		const userData = tokenService.validationAccessToken(accessToken);

		if(!userData) {
			return next(apiError.UnauthorizedError());
		}

		request.user = userData;
		next();
	} catch (e) {
		return next(apiError.UnauthorizedError());
	}
}

const apiError = require('../exeptions/apiError')

module.exports =  (error, request, response, next) => {
	console.log(error);

	if (error instanceof apiError) {
		return response.status(error.status).json({message: error.message, errors: error.errors})
	}
	return response.status(500).json({message: 'Something is wrong'})
}

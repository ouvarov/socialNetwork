const messageService = require('../service/messageServices');
const ChatDto = require('../dtos/chatDto');

class MessageControllers {
	async createChat (request, response, next) {
		try {
			const userId = request.params.userId
			const {refreshToken} = request.cookies;
			const chatData = await messageService.createChat(userId, refreshToken);
			const chatDto = new ChatDto(chatData);
			console.log(chatDto)

			return response.json(chatDto);

		}catch (e) {
			next(e)
		}

	}

	async getChats (request, response, next) {
		try {
			const {refreshToken} = request.cookies;
			const chatData = await messageService.getChat(refreshToken);

			return response.json(chatData);
		}catch (e) {
			next(e)
		}

	}
}

module.exports = new MessageControllers()

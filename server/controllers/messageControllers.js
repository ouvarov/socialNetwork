const messageService = require('../service/messageServices');
const ChatDto = require('../dtos/chatDto');
const uuid = require('uuid');

class MessageControllers {
	async createChat (request, response, next) {
		try {
			const userId = request.params.userId
			const {refreshToken} = request.cookies;
			const chatData = await messageService.createChat(userId, refreshToken);
			const chatDto = new ChatDto(chatData);

			return response.json(chatDto);

		}catch (e) {
			next(e)
		}

	}

	async getChats (request, response, next) {
		try {
			const {refreshToken} = request.cookies;
			const chatsData = await messageService.getChats(refreshToken);

			return response.json(chatsData);
		}catch (e) {
			next(e)
		}

	}

	async getChat (request, response, next) {
		try {
			const chatId = request.params.chatId;
			const chatData = await messageService.getChat(chatId);

			return response.json(chatData)

		} catch (e) {
			next(e)
		}
	}

	async addMessage (request, response, next) {
		try {
			const {chatId, message} = request.body;
			const {refreshToken} = request.cookies;

			const messageData = await messageService.addMessage(chatId, message, refreshToken);

			return response.json(messageData);
		} catch (e) {
			next(e);
		}
	}
}

module.exports = new MessageControllers()

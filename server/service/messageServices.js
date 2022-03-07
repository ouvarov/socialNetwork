const tokenService = require('../service/tokenServices');
const chatModel = require('../models/chatModel');
const UserModel = require('../models/userModel');
const UserDto = require('../dtos/userDto');
const ChatDto = require('../dtos/chatDto');
const uuid = require("uuid");

class MessageServices {
    async createChat (userId, refreshToken) {
        const userData = tokenService.validationRefreshToken(refreshToken);
        const ownerId = userData.id;
        const findChat = await chatModel.find({'users': {
                $all: [ownerId, userId]
            }});

        if(findChat.length) return findChat[0];

        const chat = await chatModel.create({users: [userId, ownerId]});

        return chat.save();
    }

    async getChat (chatId) {
        const findChat = await chatModel.findById(chatId);
        const chatDto = new ChatDto(findChat);

        return chatDto;
    }

    async getChats (refreshToken) {
        const userData = tokenService.validationRefreshToken(refreshToken);
        const ownerId = userData.id;
        const findChatWithOwner = await chatModel.find({'users': {
                $all: [ownerId]
            }});
        const chatDto = findChatWithOwner.map(item => new ChatDto(item));
        const users =  [];

        for(let i = 0; i <= chatDto.length; i++) {
            if(i === chatDto.length) {
                return users;
            } else {
                const [ userId ] = chatDto[i].users.filter((item => item !== ownerId));
                const getUser = await UserModel.findById(userId);
                const userDto = new UserDto(getUser);

                users.push({
                    id: chatDto[i].id,
                    userInfo: userDto
                });
            }
        }
    }

    async addMessage (chatId, message, refreshToken) {
        const userData = tokenService.validationRefreshToken(refreshToken);
        const findChat = await chatModel.findById(chatId);

        const created = new Date();
        const createMessage = {
            userInfo: userData,
            text: message,
            createDate: created,
            id: uuid.v4(),
        };

        findChat.messages.push(createMessage);

        return findChat.save();

    }
}

module.exports = new MessageServices();

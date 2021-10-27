const tokenService = require('../service/tokenServices');
const chatModel = require('../models/chatModel');
const UserModel = require('../models/userModel');
const UserDto = require('../dtos/userDto');
const ChatDto = require('../dtos/chatDto');

class MessageServices {
    async createChat (userId, refreshToken) {
        const userData = tokenService.validationRefreshToken(refreshToken);
        const ownerId = userData.id;
        const findChat = await chatModel.find({'users': {
                $all: [ownerId, userId]
            }});

        if(findChat.length) return findChat[0];

        const chat = await chatModel.create({users: [userId, ownerId]})

        return chat.save();
    }

    async getChat (refreshToken) {
        const userData = tokenService.validationRefreshToken(refreshToken);
        const ownerId = userData.id;
        const findChatWithOwner = await chatModel.find({'users': {
                $all: [ownerId]
            }});
        const chatDto = findChatWithOwner.map(item => new ChatDto(item));
        const users =  [];

        for(let i = 0; i <= chatDto.length; i++) {
            const [ userId ] = chatDto[i].users.filter((item => item !== ownerId));
            const getUser = await UserModel.findById(userId);
            const userDto = new UserDto(getUser);

            users.push({
                id: chatDto[i].id,
                userInfo: userDto
            });

            if(i === chatDto.length - 1) {
                return users;
            }
        }
    }
}

module.exports = new MessageServices();

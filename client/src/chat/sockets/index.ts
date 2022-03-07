import { socket } from 'api';
import { SOCKET_CONSTANTS } from 'api/constants';

export const joinMessage = (chatId: string) => socket.emit(SOCKET_CONSTANTS.JOIN_CHAT, chatId);

export const addMessage = (chatId: string) => socket.emit(SOCKET_CONSTANTS.ADD_MESSAGE, { room: chatId });

export const printingMessage = (chatId: string) => socket.emit(SOCKET_CONSTANTS.PRINTING_MESSAGE, { room: chatId });

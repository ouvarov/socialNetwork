import { socket } from 'api';
import { SOCKET_CONSTANTS } from 'api/constants';

export const changePost = (userId: string) => socket.emit(SOCKET_CONSTANTS.CHANGE_POST, { room: userId });

export const changeProfile = (userId: string) => socket.emit(SOCKET_CONSTANTS.CHANGE_PROFILE, { room: userId });

export const changePostText = (userId: string) => socket.emit(SOCKET_CONSTANTS.CHANGE_POST_TEXT, { room: userId });

export const joinProfile = (userId: string) => socket.emit(SOCKET_CONSTANTS.JOIN_PROFILE, userId);

const Router = require('express').Router;
const userController = require('../controllers/userControllers');
const postController  = require('../controllers/postControllers');
const profileControllers = require('../controllers/profileControllers');
const messageController = require('../controllers/messageControllers');
const router = new Router();
const {body} = require('express-validator')
const authMiddleware = require('../middleware/authMiddleware');

router.post('/registration',
	body('email').isEmail(),
	body('password').isLength({min: 3, max: 32}),
	userController.registration
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activated);
router.get('/refresh', userController.refreshToken);

router.get('/users', authMiddleware, userController.getUsers);

router.get('/profile/:userId', authMiddleware, profileControllers.getProfile);
router.put('/follow/:userId', authMiddleware, profileControllers.followProfile);

router.post('/addPost/:userId', authMiddleware, postController.addPost);
router.delete('/deletePost/:postId', authMiddleware, postController.removePost);
router.put('/likePost/:postId', authMiddleware, postController.likePost);

router.post('/createChat/:userId', authMiddleware, messageController.createChat);
router.get('/chats', authMiddleware, messageController.getChats);
router.get('/getChat/:chatId', authMiddleware, messageController.getChat);
router.post(
	'/addMessage',
	body('chatId'),
	body('message'),
	authMiddleware, messageController.addMessage
);

module.exports = router

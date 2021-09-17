const Router = require('express').Router;
const userController = require('../controllers/userControllers');
const postController  = require('../controllers/postControllers');
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

router.post('/addPost/:userId', authMiddleware, postController.addPost);
router.get('/profile/:userId', authMiddleware, postController.getProfile);
router.delete('/deletePost/:postId', authMiddleware, postController.deletePost);
router.put('/likePost/:postId', authMiddleware, postController.likePost);

module.exports = router

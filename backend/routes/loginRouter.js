const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const auth = require('../auth/auth');

router.post('/', loginController.login);
router.get('/me', auth.autorizar, loginController.getMe);

module.exports = router;

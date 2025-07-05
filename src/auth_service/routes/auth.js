const express = require('express');
const router = express.Router();
const { register, login, getToken } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/token', authMiddleware, getToken);

module.exports = router;
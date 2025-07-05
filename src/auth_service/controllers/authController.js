const authService = require('../services/authService');

exports.register = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await authService.register(username, password);
        res.status(201).json({ message: 'User registered', user });
    } catch (err) {
        next(err);
    }
};

exports.login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const token = await authService.login(username, password);
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production'
        });
        res.json({ token });
    } catch (err) {
        next(err);
    }
};

exports.getToken = (req, res) => {
    res.json({ user: req.user });
};
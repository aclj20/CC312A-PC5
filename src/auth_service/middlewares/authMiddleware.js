const { verifyToken } = require('../utils/jwt');

module.exports = (req, res, next) => {
    const header = req.headers.authorization || '';
    const token = header.replace(/^Bearer\s+/, '');
    if (!token) return res.status(401).json({ message: 'No token provided' });

    try {
        req.user = verifyToken(token);
        next();
    } catch {
        res.status(401).json({ message: 'Invalid token' });
    }
};

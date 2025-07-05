const User = require('../models/userModel');
const { hashPassword, comparePassword } = require('../utils/hash');
const { signToken } = require('../utils/jwt');

exports.register = async (username, password) => {
    const hashed = await hashPassword(password);
    return User.create({ username, password: hashed });
};

exports.login = async (username, password) => {
    const user = await User.findOne({ username });
    if (!user) throw Object.assign(new Error('Invalid credentials'), { status: 401 });

    const valid = await comparePassword(password, user.password);
    if (!valid) throw Object.assign(new Error('Invalid credentials'), { status: 401 });

    return signToken({ id: user.id, username: user.username });
};
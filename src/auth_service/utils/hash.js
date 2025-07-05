const bcrypt = require('bcrypt');
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS, 10) || 10;

exports.hashPassword = pw => bcrypt.hash(pw, SALT_ROUNDS);
exports.comparePassword = (pw, hash) => bcrypt.compare(pw, hash);

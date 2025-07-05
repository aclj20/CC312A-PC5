const pool = require('../db/connection');

const User = {
    async create({ username, password }) {
        const result = await pool.query(
            'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username',
            [username, password]
        );
        return result.rows[0];
    },

    async findOne({ username }) {
        const result = await pool.query(
            'SELECT id, username, password FROM users WHERE username = $1',
            [username]
        );
        return result.rows[0];
    },
};

module.exports = User;

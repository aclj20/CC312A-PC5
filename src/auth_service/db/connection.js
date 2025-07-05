const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'mydb',
});

pool.on('connect', () => console.log('✅ Connected to Postgres'));
pool.on('error', err => {
    console.error('❌ Postgres error', err);
    process.exit(-1);
});

module.exports = pool;
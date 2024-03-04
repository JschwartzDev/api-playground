const {Pool} = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'admin1',
    database: 'playground'
})

module.exports = pool;
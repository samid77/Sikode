const database = require('mysql');
const dbs = database.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_sikode',
    port: '3306',
    multipleStatements:true
});
module.exports = dbs;

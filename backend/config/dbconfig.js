const database = require('mysql');
const dbs = database.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sikode2',
    port: '3306',
    multipleStatements:true
});
module.exports = dbs;

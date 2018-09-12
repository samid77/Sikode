const database = require('mysql');
const dbs = database.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sikode',
    port: '8889',
    multipleStatements:true
});
module.exports = dbs;

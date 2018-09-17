const database = require('mysql');
const dbs = database.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
<<<<<<< HEAD
    database: 'sikode2',
=======
    database: 'db_sikode',
>>>>>>> f301148f617ed77a12cfb05ff630ee78b0539ff2
    port: '3306',
    multipleStatements:true
});
module.exports = dbs;

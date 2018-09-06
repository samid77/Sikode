const express = require('express');
const bodyParser = require('body-parser');
const database = require('mysql');
const upload = require('express-fileupload');
const crypto = require('crypto');
var koneksi = require('cors');
var app = express();

const dbs = database.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sikode',
    port: '3306',
    multipleStatements:true
});
dbs.connect();


var port = 8002;

app.use(koneksi());
app.use(upload());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/tampunganFile', express.static('tampunganFile'));

app.listen(port, () => {
    console.log('Server berjalan di port '+port+' ....')
});


app.post('/tambahUser', (req, res) => {
    // ambil paramater dari fe, eg: namaproduk, harga, file
    
    var fullname = req.body.fullname;
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    
    
    console.log(fullname);
    console.log(username);
    console.log(email);
    console.log(password);
    if (req.files){
           var fungsiFile= req.files.file;
           var fileName = req.files.file.name;
    
           fungsiFile.mv("./profpict/" + fileName,(kaloError) => {
               if(kaloError){
                //    console.log(kaloError);
                   res.send('upload failed');
               }else {
                //    res.send('upload sukses');
                //    var sql = `INSERT INTO users VALUES("${''}", "${fullname}", "${username}", "${email}", "${password}", "${fileName}")`;
                   var sql = `INSERT INTO users SET fullname= "${fullname}", username="${username}", email= "${email}", password="${password}", image="${fileName}"`;
                    dbs.query(sql, (kaloError, hasilnya) => {
                        if(kaloError){
                            throw kaloError;
                        }
                        else {
                            res.send('1')
                        }
                    });
               }
           })
       }
       else
       {
           // beda menggunakan SET dan VALUES, kalau values semua harus diisi. sedang SET hanya yang ditentukan saja yang diisi
        // var sql = `INSERT INTO users VALUES("${''}", "${fullname}", "${username}", "${email}", "${password}", "${null}")`;
        var sql = `INSERT INTO users SET fullname= "${fullname}", username="${username}", email= "${email}", password="${password}"`;
        dbs.query(sql, (kaloError, hasilnya) => {
            if(kaloError){
                throw kaloError;
            }
             else {
                res.end('Data berhasil disimpan')
            }
        });
       }
    });

    app.post('/userlogin', (req, res) => {
        var sql = `SELECT * FROM users`;
        dbs.query(sql, (error, result) => {
            if(error) {
                throw error;
            } else {
                var username = req.body.username;
                var password = req.body.password;
                console.log(username)
                console.log(password)
    
                for(var i=0; i < result.length; i++ ){
                    if(username === result[i].username && password === result[i].password)
                    {       
                        res.send(username);
                        break;
                    } else if(i === result.length - 1) {
                        res.send('0');
                    }
                }
            }
        });
    });
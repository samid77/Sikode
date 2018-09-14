const express = require('express');
const bodyParser = require('body-parser');
const database = require('mysql');
const upload = require('express-fileupload');
const crypto = require('crypto');
var koneksi = require('cors');
var app = express();

const dbs = require('./config/dbconfig');

var port = 8003;

app.use(koneksi());
app.use(upload());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/tampunganFile', express.static('tampunganFile'));

app.get('/', () => {
    var sql = `SELECT * FROM users`;
    dbs.query(sql, (err, result) => {
        console.log(result)
    })
})
app.listen(port, () => 
{
    console.log('Server berjalan di port '+port+' ....')
});

app.get('/datatag', (req, res) =>
{
    //var pullTag = `SELECT * FROM tag`;
    var pullTag = `SELECT tag.id, tag.tag, count(questiontagrelationship.tag_id) as total FROM tag join questiontagrelationship on tag.id = questiontagrelationship.tag_id group by questiontagrelationship.tag_id order by total DESC LIMIT 4`;
    dbs.query(pullTag, (err,result) =>
    {
        if (err) throw err;

        // console.log(result);
        res.send(result);
    })
});

app.post('/tambahUser',(req, res) =>
    {
        var fullname = req.body.fullname;
        var username = req.body.username;
        var email = req.body.email;
        var password = req.body.password;
        console.log(fullname);
        console.log(username);
        console.log(email);
        console.log(password);

        var sql = `INSERT INTO users SET fullname= "${fullname}", username="${username}", 
                    email= "${email}", password="${password}"`;
                    dbs.query(sql, (kaloError, hasilnya) => 
                    {
                        if(kaloError)
                        {
                            throw kaloError;
                        }
                        else 
                        {
                            res.send('1')
                        }
                    })
    });

app.post('/editProfile', (req, res) => 
{
    // ambil paramater dari fe, eg: namaproduk, harga, file
    
    var fullname = req.body.fullname;
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    
    console.log(fullname);
    console.log(username);
    console.log(email);
    console.log(password);

    var sql = `INSERT INTO users SET fullname= "${fullname}", username="${username}", email= "${email}", password="${password}", image="${fileName}"`;
    if (req.files)
    {
        var fungsiFile= req.files.file;
        var fileName = req.files.file.name;
    
        fungsiFile.mv("./profpict/" + fileName,(kaloError) => 
        {
            if(kaloError)
            {
            //    console.log(kaloError);
                res.send('upload failed');
            }
            else 
            {
            //    res.send('upload sukses');
            //    var sql = `INSERT INTO users VALUES("${''}", "${fullname}", "${username}", "${email}", "${password}", "${fileName}")`;
                var sql = `INSERT INTO users SET fullname= "${fullname}", username="${username}", email= "${email}", password="${password}", image="${fileName}"`;
                dbs.query(sql, (kaloError, hasilnya) => 
                {
                    if(kaloError)
                    {
                        throw kaloError;
                    }
                    else 
                    {
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
        dbs.query(sql, (kaloError, hasilnya) => 
        {
            if(kaloError)
            {
                throw kaloError;
            }
            else 
            {
                res.end('Data berhasil disimpan')
            }
        });
    }
});

app.post('/userlogin', (req, res) => 
{
    var sql = `SELECT * FROM users`;
    dbs.query(sql, (error, result) => 
    {
        if(error) 
        {
            throw error;
        } 
        else 
        {
            var username = req.body.username;
            var password = req.body.password;
            // console.log(username)
            // console.log(password)

            for(var i=0; i < result.length; i++ )
            {
                if(username === result[i].username && password === result[i].password)
                {       
                    var userID = result[i].id;
                    res.send((userID).toString());
                    break;
                } 
                else if(i === result.length - 1) 
                {
                    res.send('0');
                }
            }
        }
    });
});

app.post('/datauser', (req, res) =>
{
    var userID  = req.body.userID;
    console.log(userID)

    var pullData = `SELECT * FROM users WHERE id="${userID}"`;
    dbs.query(pullData, (err,result) =>
    {
        if (err) throw err;

        // console.log(result);
        res.send(result);
    })
});

app.get('/recentquestion',(req, res) =>
    {
        var pullData = 'SELECT * FROM question ORDER BY id DESC LIMIT 4'
        dbs.query(pullData,(err, result) =>
        {
            if (err) throw err
            res.send(result)
        })
    }
)

app.get('/allquestion',(req, res) =>
{
    var pullData = 'SELECT * FROM question WHERE is_approved = 1 ORDER BY id DESC'
    dbs.query(pullData,(err, questionList) =>
    {
        if (err) throw err;
        
        var pullTag = `SELECT questiontagrelationship.question_id, tag.tag FROM question JOIN questiontagrelationship ON question.id = questiontagrelationship.question_id JOIN tag ON questiontagrelationship.tag_id = tag.id WHERE question.is_approved = 1 ORDER BY question.id DESC`;
        dbs.query(pullTag, (err,resultTag) => 
        {
            if (err) throw err;

            var hasil = [{questionList},{resultTag}];

            res.send(hasil)
        })
    })
});

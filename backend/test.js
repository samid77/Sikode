const database = require('mysql');
const dbs = database.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sikode',
    port: '3306',
});
dbs.connect();

// var qList = new Array ( );
// qList[0] = new Array ({title:'title01', content:'content01'});
// qList[1] = new Array ({title:'title02', content:'content02'});

// var tag1 = 'tag01'
// var tag2 = 'tag02'
// var tag3 = 'tag03'
// var tag4 = 'tag04'
// var tag5 = 'tag05'

// qList[0][1] = (tag1);
// qList[0][2] = (tag2);
// qList[0][3] = (tag3);
// qList[1][1] = (tag4);
// qList[1][2] = (tag5);

// console.log(qList);

// var questionList = new Array ( );
var questionList = [];

var pullData = 'SELECT * FROM question WHERE is_approved = 1 ORDER BY id DESC';
dbs.query(pullData,(err, result) =>
{
    if (err) throw err;

    //console.log(result);

    for(var i=0; i<result.length; i++)
    {
        questionList.push(result[i]);
    }
    

    var pullTag = `SELECT questiontagrelationship.question_id, tag.tag FROM question JOIN questiontagrelationship ON question.id = questiontagrelationship.question_id JOIN tag ON questiontagrelationship.tag_id = tag.id WHERE question.is_approved = 1 ORDER BY question.id DESC`;
    dbs.query(pullTag,(err,resultTag) =>
    {
        if (err) throw err;
        // console.log(questionList);
        // console.log(resultTag);
        var hasil = [{questionList}, {resultTag}]
        // console.log(hasil);

        var qList = hasil[0].questionList;
        var qTag = hasil[1].resultTag;
        console.log(qList);
        console.log(qTag);

       for(var i=0; i<qList.length; i++)
       {
           console.log(`Pertanyaan ${i+1}`);
           console.log(`  Title   : ${qList[i].question_title}`);
           console.log(`  Content : ${qList[i].question_content}`);
           console.log(`  Tag     : `);
           
           for(var j=0; j<qTag.length; j++)
           {
                if(qList[i].id == qTag[j].question_id)
                {
                    console.log(`           => ${qTag[j].tag}`);
                }        
           }
           console.log(`\n`);
       }
    })
})

 
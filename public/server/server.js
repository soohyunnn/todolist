const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port =process.env.PORT || 3003;

var db_config = require(__dirname+'/config/database.js');
var conn = db_config.init();

//DB
db_config.connect(conn);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.send('ROOT');
});

app.get('/list', function (req, res) {
    var sql = 'SELECT * FROM board';    
    conn.query(sql, function (err, rows, fields) {
        if(err) console.log('query is not excuted. select fail...\n' + err);
        else res.render('list.ejs', {list : rows});
    });
});

app.use(cors());

app.use(bodyParser.json());
app.use('/api', (req, res)=> res.json({username:'영섭'}));

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})
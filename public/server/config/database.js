let mysql = require('mysql');
let db_info = {
    host: 'csh1113.cafe24.com',
    port: '3306',
    user: 'csh1113',
    password: 'qweasd12!@',
    database: 'csh1113'
}

module.exports = {
    init: function () {
        return mysql.createConnection(db_info);
    },
    connect: function(conn) {
        conn.connect(function(err) {
            if(err) console.error('mysql connection error : ' + err);
            else console.log('mysql is connected successfully!');
        });
    }
}
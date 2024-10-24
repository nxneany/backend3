var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '202.28.34.197',
    user: 'web66_65011212241',
    password: '65011212241@csmsu',
    database: 'web66_65011212241'
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;





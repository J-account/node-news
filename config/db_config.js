//将数据库配置模块单独提取出来 
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'node-news'
});
connection.connect();


module.exports = connection;

var mysql=require('mysql');
var express = require('express')
var app = express();



var connection=mysql.createConnection({

host:'localhost',
user:'root',
password:'',
database:'yo'

});

module.exports = connection;


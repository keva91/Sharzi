var mysql=require('mysql');
var express = require('express')
var app = express();



var connection=mysql.createConnection({

host:'localhost',
user:'root',
password:'NIDEMAnidema9100',
database:'jb_projet2'

});

module.exports = connection;


var mysql=require('mysql');
var express = require('express')
var app = express();



var connection=mysql.createConnection({

host:'localhost',
user:'root',
password:'',
database:'yo'

});

connection.connect(function(error){
    if(error){
        console.log(error)
    }else{
        console.log('success')
    }

});


module.exports = connection;



var express = require('express');
var app = require('../server')
var bodyParser = require('body-parser')
var Login = require('../models/Login');

app.use(bodyParser.json());
	

app.post('/login',function(req,res)
{
    console.log('befor get')
    console.log(req.body)
    
    /*Login.ObtIdentifiants(function(err,rows){
        if(err){
            console.log(err)
            res.json(err);
        }else{
            console.log(rows)
            //res.send(rows);
            res.json(rows);
        }
        
    });*/
    
});

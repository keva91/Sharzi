
var express = require('express');
var app = require('../server')
var Etudiant = require('../models/Etudiant');
	

app.get('/etudiant',function(req,res)
{
    console.log('befor get')
    
    Etudiant.ObtEtudiant(function(err,rows){
        if(err){
            console.log(err)
            res.json(err);
        }else{
            console.log(rows)
            //res.send(rows);
            res.json(rows);
        }
        
    });
    
});

module.exports=Etudiant;
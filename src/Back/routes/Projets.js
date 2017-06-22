
var express = require('express');
var app = require('../server')
var bodyParser = require('body-parser')
var Projet=require('../models/Projet');

	
app.get('/tdb',function(req,res,next){
    Projet.ObtTsProjets(function(err,rows){
       if(err)
       {
           res.send(err);
       } 
       else
       {
           res.send(rows);
       }
    });
});


app.get('/projet/:id?',function(req,res,next)
{
    if(req.params.id)
    {
        Projet.ObtIdProjet(req.params.id,function(err,rows)
        {
            if(err)
                res.json(err);
            else
                res.json(rows);
        });
    }
    else
    {
        Projet.ObtTsProjets(function(err,rows)
        {
            if(err)
            res.json(err);
            else
            res.json(rows);
        });
    }
});


app.post('/projet/:id?',function(req,res,next)
{
    if(req.params.id){
        Projet.modifierProjet(function(err,rows){
            if(err)
                res.json(err); 
            else
                res.json(rows);
        });

    }else{
        console.log(req.body)
        Projet.ajouterProjet(req.body,function(err,rows){
            if(err){
                console.log('error')
                res.json(err);
            }else{
                
                res.json(rows.insertId);//or return count for 1 &amp;amp;amp; 0
            }
                
                
            
                
        });

    }
    

});
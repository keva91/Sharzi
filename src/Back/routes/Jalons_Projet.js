



var express = require('express');
var app = require('../server')
var Jalon_Projet=require('../models/Jalon_Projet');
var Jalon=require('../models/Jalon');

var bodyParser = require('body-parser')

app.use(bodyParser.json());

/*router.get('/tdb',function(req,res,next)
{
    Jalon_Projet.ObtJalon_Projet(req.params,function(err,rows)
        {
            if(err)
            res.json(err);
            else
            res.json(rows);
        });
});*/
app.get('/Jalon-Projet/:id?',function(req,res,next)
{
    if(req.params.id)
    {
        Jalon_Projet.ObtJalon_ProjetById(req.params.id,function(err,rows)
        {
            if(err)
                res.json(err);
            else
                res.json(rows);
        });
        Jalon_Projet.ObtJalon_ProjetParIdProjet(req.params.id,function(err,rows)
        {
            if(err)
                res.json(err);
            else
                res.json(rows);
        });
    }
    else
    {
        Jalon_Projet.ObtTsJalon_Projets(function(err,rows)
        {
            if(err)
            res.json(err);
            else
            res.json(rows);
        });
    }
});


app.get('/Jalon-Projet/projet/:id?',function(req,res,next)
{
    console.log('in route jalon projet get')
    if(req.params.id)
    {       
        console.log('in if')
        console.log(req.params.id)
        Jalon_Projet.ObtJalon_ProjetParIdProjet(req.params.id,function(err,rows)
        {
            if(err){
                console.log('error')
                console.log(err)
                res.json(err);
            }else{
                res.json(rows);
            }
        });
    }
    else
    {
        console.log('else')
    }
});


app.post('/',function(req,res,next)
{
    Jalon_Projet.ajouterJalon_Projet(req.body,function(err,count)
    {
        if(err)
            res.json(err);
        else
            res.json(req.body);
    });

    Jalon_Projet.modifierJalon_Projet(function(err,rows)
    {
        if(err)
            res.json(err);
        else
            res.json(rows);
    });

     Jalon_Projet.supprimerJalon_Projet(req.params.id,function(err,count){
         if(err)
             res.json(err);
         else
             res.json(count);
     });
});
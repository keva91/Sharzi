
var express = require('express');
var router = express.Router();
var Projet=require('../models/Projet');
	
app.get('/tdb',function(req,res,next)
{
    Projet.ObtTsProjets(function(err,rows)
    {
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


router.get('/:id?',function(req,res,next)
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
        Projet.ObtTtProjet(function(err,rows)
        {
            if(err)
            res.json(err);
            else
            res.json(rows);
        });
    }
});


router.post('/',function(req,res,next)
{
    Projet.ajouterProjet(req.body,function(err,count)
    {
        if(err)
            res.json(err);
        else
            res.json(req.body);//or return count for 1 &amp;amp;amp; 0
    });

    Projet.modifierProjet(function(err,rows)
    {
        if(err)
            res.json(err); 
        else
            res.json(rows);
    });
});
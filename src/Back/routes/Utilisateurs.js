
var express = require('express');
var router = express.Router();
var Utilisateur=require('../models/Utilisateur');
	
router.get('/:id?',function(req,res,next)
{
    if(req.params.id)
    {
        Utilisateur.ObtIdUtilisateur(req.params.id,function(err,rows)
        {
            if(err)
                res.json(err);
            else
                res.json(rows);
        });
    }
    else
    {
        Utilisateur.ObtTtUtilisateur(function(err,rows)
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
    Utilisateur.ajouterUtilisateur(req.body,function(err,count)
    {
        if(err)
            res.json(err);
        else
            res.json(req.body);//or return count for 1 &amp;amp;amp; 0
    });

    Utilisateur.modifierUtilisateur(function(err,rows)
    {
        if(err)
            res.json(err); 
        else
            res.json(rows);
    });
});
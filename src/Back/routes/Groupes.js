
var express = require('express');
var router = express.Router();
var Groupe=require('../models/Groupe');
	
router.get('/:id?',function(req,res,next)
{
    if(req.params.id)
    {
        Groupe.ObtGroupeId(req.params.id,function(err,rows)
        {
            if(err)
                res.json(err);
            else
                res.json(rows);
        });

        Groupe.ObtGroupeParIdGroupeUtilisat(req.params.id,function(err,rows)
        {
            if(err)
                res.json(err);
            else
                res.json(rows);
        });
    }
    else
    {
        Groupe.ObtTtGroupe(function(err,rows)
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
    Groupe.ajouterGroupe(req.body,function(err,count)
    {
        if(err)
            res.json(err);
        else
            res.json(req.body);//or return count for 1 &amp;amp;amp; 0
    });

    Groupe.modifierGroupe(function(err,rows)
    {
        if(err)
            res.json(err); 
        else
            res.json(rows);
    });

     Groupe.supprimerGroupe(req.params.id,function(err,count){
         if(err)
             res.json(err);
         else
             res.json(count);
     });


});
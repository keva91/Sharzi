
var express = require('express');
var router = express.Router();
var Jalon=require('../models/Jalon');
	
/*router.get('/tdb',function(req,res,next)
{
    Jalon.ObtTsJalons(function(err,rows)
        {
            if(err)
            res.json(err);
            else
            res.json(rows);
        });
});*/

router.get('/:id?',function(req,res,next)
{
    if(req.params.id)
    {
        Jalon.ObtJalonById(req.params.id,function(err,rows)
        {
            if(err)
                res.json(err);
            else
                res.json(rows);
        });
        Jalon.ObtJalonParIdProjet(req.params.id,function(err,rows)
        {
            if(err)
                res.json(err);
            else
                res.json(rows);
        });
    }
    else
    {
        Jalon.ObtTsJalons(function(err,rows)
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
    Jalon.ajouterJalon(req.body,function(err,count)
    {
        if(err)
            res.json(err);
        else
            res.json(req.body);
    });

    Jalon.modifierJalon(function(err,rows)
    {
        if(err)
            res.json(err); 
        else
            res.json(rows);
    });

     Jalon.supprimerJalon(req.params.id,function(err,count){
         if(err)
             res.json(err);
         else
             res.json(count);
     });
});
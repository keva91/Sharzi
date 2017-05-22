
var express = require('express');
var router = express.Router();
var Notes=require('../models/Notes');
	
router.get('/:id?',function(req,res,next)
{
    if(req.params.id)
    {
        Notes.ObtIdNotes(req.params.id,function(err,rows)
        {
            if(err)
                res.json(err);
            else
                res.json(rows);
        });
    }
    else
    {
        Notes.ObtTtNotes(function(err,rows)
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
    Notes.ajouterNotes(req.body,function(err,count)
    {
        if(err)
            res.json(err);
        else
            res.json(req.body);//or return count for 1 &amp;amp;amp; 0
    });

    Notes.modifierNotes(function(err,rows)
    {
        if(err)
            res.json(err); 
        else
            res.json(rows);
    });
});
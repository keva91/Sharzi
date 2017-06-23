
var express = require('express');
var app = require('../server')
var Jalon=require('../models/Jalon');
var Jalon_Projet=require('../models/Jalon_Projet');

var bodyParser = require('body-parser')

app.use(bodyParser.json());
	
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

app.get('/jalon/:id?',function(req,res,next)
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


app.post('/jalon',function(req,res,next)
{


    Jalon.ajouterJalon(req.body,function(err,row)
    {
        console.log(req.body)
        if(err){
             res.json(err);
             console.log('error creation jalon')
        }else{
            
            console.log('ok creation jalon')

            var idProjet = row.insertId;

            var tableauFormaté = req.body.list.map(function(item){ 
                var smallTab = [];
                smallTab.push(idProjet,parseInt(item))
                return smallTab;
            });

            Jalon_Projet.ajouterJalon_Projet(tableauFormaté,function(err,row){
                if(err){
                    console.log('error creation jalon projet')
                    console.log(err)
                    res.json(err);
                }else{
                   console.log('ok creation jalon projet')
                   res.json(row);
                }
                            
            });


        }


       
            

    });

    
});


app.put('/jalon',function(req,res,next)
{
   

    Jalon.modifierJalon(function(err,rows)
    {
        if(err)
            res.json(err); 
        else
            res.json(rows);
    });

});



app.delete('/jalon',function(req,res,next)
{
   

     Jalon.supprimerJalon(req.params.id,function(err,count){
         if(err)
             res.json(err);
         else
             res.json(count);
     });
});
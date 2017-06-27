
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
            if(err){
                res.json(err);
            }else{
                res.json(rows);
            }
        });
    }
});


app.post('/jalon',function(req,res,next)
{


    Jalon.ajouterJalon(req.body,function(err,row)
    {
        console.log(req.body)
        console.log('in ajouterJalon')
        if(err){
            console.log('error creation jalon')
            res.json(err);
             
        }else{
            
            console.log('ok creation jalon')

            var idProjet = row.insertId;
            var etat = 'EN ATTENTE'

            var tableauFormaté = req.body.list.map(function(item){ 
                var smallTab = [];
                smallTab.push(idProjet,parseInt(item),etat)
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


app.put('/jalon/:id?',function(req,res,next)
{
   
   var id = parseInt(req.params.id)

    Jalon.modifierJalon(id,req.body,function(err,rows)
    {
        if(err){
            console.log('error update jalon')
            console.log(err)
            res.json(err); 
        }else{
            console.log('ok update jalon')
            res.json(rows);
        }
    });

});



app.delete('/jalon/:id?',function(req,res,next)
{
    console.log(req.params.id)
    if(req.params.id)
    {
        Jalon_Projet.supprimerJalon_ProjetByJalonId(req.params.id,function(err,rows)
        {
            if(err){
                console.log('err supp jP')
                console.log(err)
                res.json(err);
            }else{
                //res.json(rows);

                Jalon.supprimerJalon(req.params.id,function(err,rows){


                    if(err){
                        console.log('error supp jalon')
                        console.log(err)
                        res.json(err);
                    }else{
                        res.json(rows);
                    }

                })
            }
        });
    }






     
});

var express = require('express');
var app = require('../server');
var Projet=require('../models/Projet');
var Jalon_Projet = require('../models/Jalon_Projet');
var Jalon = require('../models/Jalon');

var async = require('async');

app.get('/tdb',function(req,res,next)
{
    console.log("Dans le back")

    var jalon;
    var projet;
    var jalon_projet;
    
    async.parallel([
        function(callback) {        
            
            Projet.ObtTsProjets(function(errP,rowsP)
            { 	
                /*console.log("Resultats Projet : ");
                console.log(rowsP);
                console.log("---------------------------------");*/
                projet = rowsP;

                return callback(errP, rowsP);
            });
        },
        function(callback) {    
            Jalon_Projet.ObtFullJalon_Projet(function(errJP,rowsJP)
            { 	
                /*console.log("Resultats Jalon_Projets : ");
                console.log(rowsJP);
                console.log("---------------------------------");*/
                jalon_projet = rowsJP;

                return callback(errJP, rowsJP);
            });
        }
    ], function(error, callbackResults) {
        if (error) {
            //handle error
            console.log('callback error');
            console.log(error);
        } else {
            /*console.log("--------------result jalon_projet-------------------");
            console.log(jalon_projet)

            console.log("------------result projet-------------------");
            console.log(projet)

            console.log("--------------result jalon-------------------");
            console.log(jalon)

            console.log("--------------result callbackResults-------------------");
            console.log("--------------result rows 1-------------------");
            console.log(callbackResults[0]); // rows1
            console.log("--------------result rows 2-------------------");
            console.log(callbackResults[1]); // rows2*/
            // use this data to send back to client etc.
            res.send(JSON.stringify(callbackResults));
        }
    });
  
});


app.get('/projet/:id?',function(req,res,next)
{
    if(req.params.id)
    {
        Projet.ObtFullProjetById(req.params.id,function(err,rows)
        {
            if(err)
                res.json(err);
            else
                res.json(rows);
        });
    }else{

         Projet.ObtTsProjets(function(err,rows)
        {
            if(err)
                res.json(err);
            else
                res.json(rows);
        });

    }
    
});





app.post('/projet',function(req,res,next)
{
   
    console.log(req.body)
    Projet.ajouterProjet(req.body,function(err,rows){
        if(err){
            console.log('error')
            res.json(err);
        }else{
            
            res.json(rows.insertId);//or return count for 1 &amp;amp;amp; 0
        }
            
    });

});





app.put('/projet/:id?',function(req,res,next)
{
    if(req.params.id){
        Projet.modifierProjet(req.body,function(err,rows){
            if(err){
                console.log('error')
                console.log(err)
                res.json(err);
            }else{
                console.log('win')
                res.json(rows);
            }
               
        });

    }else{
        console.log('no Id');
    }
    

});


app.delete('/projet/:id?',function(req,res,next)
{

    console.log(req.params.id)
    if(req.params.id)
    {
        Jalon_Projet.supprimerJalon_ProjetByProjetId(req.params.id,function(err,rows)
        {
            if(err){
                console.log('err supp jP')
                console.log(err)
                res.json(err);
            }else{
                //res.json(rows);

                Projet.supprimerProjet(req.params.id,function(err,rows){


                    if(err){
                        console.log('error supp projet')
                        res.json(err);
                    }else{
                        res.json(rows);
                    }

                })
            }
        });
    }
    
});
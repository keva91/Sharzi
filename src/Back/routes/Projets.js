
var express = require('express');
var app = require('../server');
var Projet=require('../models/Projet');
var Jalon_Projet = require('../models/Jalon_Projet');
var Jalon = require('../models/Jalon');

var async = require('async');

app.get('/tdb',function(req,res,next)
{
    /*var tdbResultat;

    Projet.ObtTsProjets(function(err,rowsP)
    {

       if(err)
       {
           res.send(err);
       } 
       else
       {
           //res.send(rows);

           tdbResultat = rowsP;
       }
    });

    Jalon_Projet.ObtJalon_Projet(req.params,function(err,rowsJP)
        {
            if(err)
            res.json(err);
            else
            res.json(rowsJP);
        });

    Jalon.ObtTsJalons(function(err,rowsJ)
        {
            if(err)
            res.json(err);
            else
            res.json(rowsJ);
        });*/

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
            Jalon_Projet.ObtJalon_Projet(function(errJP,rowsJP)
            { 	
                /*console.log("Resultats Jalon_Projets : ");
                console.log(rowsJP);
                console.log("---------------------------------");*/
                jalon_projet = rowsJP;

                return callback(errJP, rowsJP);
            });
        },
        function(callback) {
            Jalon.ObtTsJalons(function(errJ,rowsJ)
            {
                /*console.log("Resultats Jalon : ");
                console.log(rowsJ);
                console.log("---------------------------------");*/
                jalon = rowsJ;

                return callback(errJ, rowsJ);
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
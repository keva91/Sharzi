
var express = require('express');
var router = express.Router();
var app = require('../server')
var Groupe =require('../models/Groupe');
var Jalon_Projet = require('../models/Jalon_Projet');
var Projet = require('../models/Projet'); 
var Note = require('../models/Note');

var bodyParser = require('body-parser')

app.use(bodyParser.json()); 

var async = require('async');

app.get('/note',function(req,res,next){ 

     var nbJPmax;
     var groupe;
     var projet;
     var jalon_projet = [];

     async.parallel([

         function(callback){
             Jalon_Projet.ObtNbMaxJalons_Projet(function(err,rows){
                 if(rows)
                 {
                     //console.log("Resultats nbMaxJalonProjet  : ");
                     //console.log(rows)
                  }
                 else
                 {
                      //console.log('empty Jalon_Projet ')
                 }

                 nbJPmax = rows;

                 return callback(err, rows);

         });
         },

         function(callback) {
        
             Groupe.ObtTsGroupes(function(err1,rows1){ 
                 if(rows1){
                     //console.log("Resultats Groupe  : ");
                     //console.log(rows1)
                 }else{
                     //console.log('empty Groupe ')
                 }
                 //console.log("---------------------------------");
                 groupe = rows1;

                 return callback(err1, rows1);
             });
         },
         function(callback) {
            
             Projet.ObtNoteProjet(function(err2,rows2){

                 if(rows2){
                     //console.log("Resultats Projets  : ");
                     //console.log(rows2)
                 }else{
                     //console.log('empty Projets ')
                 }
               
                 projet = rows2;
                 return callback(err2, rows2);
             });
         },
         function(callback) {
            
             Jalon_Projet.ObtNoteDeTsJalon_Projets(function(err3,rows3){
                 if(rows3){
                     //console.log("Resultats Projets jalon : ");
                     //console.log(rows3)
                 }else{
                     //console.log('empty projet jalon')
                 }
                 //console.log("---------------------------------");
                
                 jalon_projet = rows3;
                 return callback(err3, rows3);
             });
         }
     ], function(error, callbackResults) {
         if (error) {
             //handle error
             //console.log('callback error');
             //console.log(error);
         } else {
             //  console.log("--------------result jalon_projet-------------------");
             //  console.log(jalon_projet)

             //  console.log("------------result projet-------------------");
             //  console.log(projet)

             //  console.log("--------------result groupe-------------------");
             //  console.log(groupe)

            //console.log("--------------result callbackResults-------------------");
            //console.log(JSON.parse(JSON.stringify(callbackResults))); // rows2
            //console.log(callbackResults[1][0]); // rows2
            //console.log(callbackResults[1][0].idP); // rows2

          res.send(callbackResults);
         }
     });
 });


app.get('/groupe/:id?',function(req,res,next)
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

    }
    else
    {
        Groupe.ObtFullGroupes(function(err,rows)
        {
            if(err)
            res.json(err);
            else
            res.json(rows);
        });
    }
});


app.get('/groupe/detail/:id?',function(req,res,next)
{
    console.log('in groupe detail')
    if(req.params.id)
    {
        Groupe.ObtDetailGroupe(req.params.id,function(err,rows)
        {
            if(err){
                res.json(err);
            }else{
                res.json(rows);
            }
        });

    }
   
});

app.post('/groupe',function(req,res,next){
    console.log('in ajouter groupe')
    console.log(req.body)
    Groupe.ajouterGroupe(req.body,function(err,rows)
        {
            
            if(err){
                console.log('error')
                console.log(err)
                res.json(err);
            }else{
                res.json(rows);
            }
           
        });
});



app.delete('/groupe/:id?',function(req,res,next){
    console.log('in supp groupe')
    console.log(req.params.id)
    if(req.params.id){

        Groupe.supprimerGroupe(req.params.id,function(err,rows)
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
});





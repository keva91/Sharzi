
var express = require('express');
var router = express.Router();
var app = require('../server')
var Groupe =require('../models/Groupe');
var Jalon_Projet = require('../models/Jalon_Projet');
var Projet = require('../models/Projet'); 
var Note = require('../models/Note'); 

var async = require('async');

app.get('/note',function(req,res,next){ 

     var tabNotes = new Array();
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

router.post('/GroupAjout',function(req,res,next)
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
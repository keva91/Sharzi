
var express = require('express');
var app = require('../server')
<<<<<<< HEAD
var Projet=require('../models/Projet');
var Jalon_Projet = require('../models/Jalon_Projet');
var Jalon = require('../models/Jalon');
	
app.get('/tdb',function(req,res,next)
{
    /*var tdbResultat;

    Projet.ObtTsProjets(function(err,rowsP)
    {
=======
var bodyParser = require('body-parser')
var Projet=require('../models/Projet');

	
app.get('/tdb',function(req,res,next){
    Projet.ObtTsProjets(function(err,rows){
>>>>>>> origin/master
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

        console.log("Ta mére");
    var jalon;
    var projet;
    var jalon_projet;
    
    Projet.ObtTsProjets(function(err,rowsP)
    { 	
        console.log("Resultats Projet : ");
        console.log(rowsP);
        console.log("---------------------------------");
        projet = rowsP;
    });

    Jalon_Projet.ObtJalon_Projet(function(err,rowsJP)
    { 	
        console.log("Resultats Jalon_Projets : ");
        console.log(rowsJP);
        console.log("---------------------------------");
        jalon_projet = rowsJP;
    });

    Jalon.ObtTsJalons(function(err,rowsJ)
    {
        console.log("Resultats Jalon : ");
        console.log(rowsJ);
        console.log("---------------------------------");
        jalon = rowsJ;
    });



    /*setTimeout(function()
    {
         for (r1 in groupe)
         {
             for(r2 in projet)
             {
                 if(groupe[r1].idProjet == projet[r2].idP)
                 {
                     var a = JSON.stringify(groupe[r1]).substring(0,JSON.stringify(groupe[r1]).length-1) + ",";
                     var b = JSON.stringify(projet[r2]).substring(1,JSON.stringify(projet[r2]).length);
                     var c ="";
                   
                     for(r3 in jalon_projet)
                     {
                         if(projet[r2].idP == jalon_projet[r3].idProjet)
                         {
                             b = JSON.stringify(projet[r2]).substring(1,JSON.stringify(projet[r2]).length-1) + ",";
                             //c += JSON.stringify(jalon_projet[r3]).substring(1,JSON.stringify(jalon_projet[r3]).length-1) +",";
                             c = JSON.stringify(jalon_projet[r3]).substring(1,21) + r3 
                                 + JSON.stringify(jalon_projet[r3]).substring(21,JSON.stringify(jalon_projet[r3]).length-1) + ",";
                         }

                     }
                     abc = a + b + c.substring(0,c.length-1) + " }";
                     abc = JSON.parse(abc);
                     console.log(abc);
                     groupe[r1] = abc;
                 }
             }
         }
        
        groupe = JSON.parse(JSON.stringify(groupe));
     }, 2000);*/
  
});


<<<<<<< HEAD
app.get('/:id?',function(req,res,next)
=======
app.get('/projet/:id?',function(req,res,next)
>>>>>>> origin/master
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


<<<<<<< HEAD
app.post('/',function(req,res,next)
=======
app.post('/projet/:id?',function(req,res,next)
>>>>>>> origin/master
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
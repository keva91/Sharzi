
// var express = require('express');
// var router = express.Router();
// var Jalon_Projet=require('../models/Jalon_Projet');

// router.get('/:id?',function(req,res,next)
// {
//     if(req.params.id)
//     {
//         Jalon_Projet.ObtJalon_ProjetById(req.params.id,function(err,rows)
//         {
//             if(err)
//                 res.json(err);
//             else
//                 res.json(rows);
//         });
       
//         Jalon_Projet.ObtJalon_ProjetByIdProjet(req.params.id,function(err,rows)
//         {
//             if(err)
//                 res.json(err);
//             else
//                 res.json(rows);
//         });
//     }
//     else
//     {
//         Jalon_Projet.ObtTsJalon_Projets_Projet(function(err,rows)
//         {
//             if(err)
//             res.json(err);
//             else
//             res.json(rows);
//         });
//     }
// });

// app.get('/note', function(req, res, next){

// Jalon_Projet.ObtNbMaxJalon_Projets_Projet(req.body,function(err,rows)
//     {
//         if(err)
//             res.json(err);
//         else
//             res.json(req.rows);
//     });
// });

// router.post('/',function(req,res,next)
// {
//     Jalon_Projet.ajouterJalon_Projet(req.body,function(err,count)
//     {
//         if(err)
//             res.json(err);
//         else
//             res.json(req.body);
//     });

//     Jalon_Projet.modifierJalon_Projet(function(err,rows)
//     {
//         if(err)
//             res.json(err); 
//         else
//             res.json(rows);
//     });

//      Jalon_Projet.supprimerJalon_Projet(req.params.id,function(err,count){
//          if(err)
//              res.json(err);
//          else
//              res.json(count);
//      });
// });



var express = require('express');
var router = express.Router();
var Jalon_Projet=require('../models/Jalon_Projet');

/*router.get('/tdb',function(req,res,next)
{
    Jalon_Projet.ObtJalon_Projet(req.params,function(err,rows)
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
        Jalon_Projet.ObtJalon_ProjetById(req.params.id,function(err,rows)
        {
            if(err)
                res.json(err);
            else
                res.json(rows);
        });
        Jalon_Projet.ObtJalon_ProjetParIdProjet(req.params.id,function(err,rows)
        {
            if(err)
                res.json(err);
            else
                res.json(rows);
        });
    }
    else
    {
        Jalon_Projet.ObtTsJalon_Projets(function(err,rows)
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
    Jalon_Projet.ajouterJalon_Projet(req.body,function(err,count)
    {
        if(err)
            res.json(err);
        else
            res.json(req.body);
    });

    Jalon_Projet.modifierJalon_Projet(function(err,rows)
    {
        if(err)
            res.json(err);
        else
            res.json(rows);
    });

     Jalon_Projet.supprimerJalon_Projet(req.params.id,function(err,count){
         if(err)
             res.json(err);
         else
             res.json(count);
     });
});
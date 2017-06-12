
var express = require('express');
var app = require('../server')
var bodyParser = require('body-parser')
var Login = require('../models/Login');

app.use(bodyParser.json());
	

app.post('/login',function(req,res)
{
    console.log('befor get')
    console.log(req.body);


    // va chercher dans la base si ces identifiants existe
    Login.ObtIdentifiants(req.body,function(err,rows){
        if(err){
            console.log(err)
            res.json(err);
        }else{
            
            if(rows.length){
                // si il y a un resultat, il faut alors determiner à quelle type de personne ces identifiants appartienne
            
                Login.ObtTypeEns(rows[0],function(err,rows){
                    if(err){
                        console.log(err)
                        res.json(err);
                    }else{
                    
                        if(rows.length){
                            console.log('ens');
                            res.json(rows);
                        }
                        
                        
                    }
                })

                Login.ObtTypeEtu(rows[0],function(err,rows){
                    if(err){
                        console.log(err)
                        res.json(err);
                    }else{
                    
                        if(rows.length){
                            console.log('etu');
                            res.json(rows);
                        }
              
                    }
                })
            }else{
                // s'il n'y a pas de resultats c'est que les identifiants sont faux
                res.json(rows);
            }
            //res.send(rows);
          
        }
        
    });
    
});

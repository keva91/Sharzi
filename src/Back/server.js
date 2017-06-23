var express = require('express');
var app = express();
var cors = require('cors');
var connection = require('./dbconnection')


connection.connect(function(error){
    if(error){
        console.log(error)
    }else{
        console.log('connection DB success')
    }

});

//const routesEtudiant = require('./routes/Etudiant');
//app.use('/test',routesEtudiant)

app.use(cors());



app.listen(3000,function(){
    console.log('api is listenning')
})


module.exports = app;

var etudiant = require('./routes/Etudiant')
var groupes = require('./routes/Groupes')
var login = require('./routes/Login')
var projets = require('./routes/Projets')
var jalons = require('./routes/Jalons')

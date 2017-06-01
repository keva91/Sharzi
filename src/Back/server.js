var express = require('express');
var app = express();
var cors = require('cors');
var connection = require('./dbconnection')


connection.connect(function(error){
    if(error){
        console.log(error)
    }else{
        console.log('success')
    }

});

//const routesEtudiant = require('./routes/Etudiant');
//app.use('/test',routesEtudiant)

app.use(cors());



app.listen(3000,function(){
    console.log('listen')
})


module.exports = app;

var etudiant = require('./routes/Etudiant')
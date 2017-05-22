var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());


app.listen(3000,function(){
    console.log('listen')
})


module.exports = app;


var etudiant = require('./routes/Etudiant')
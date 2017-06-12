var db = require('../dbconnection');


var Login={
    

    ObtIdentifiants:function(callback)
    {
        return db.query("Select * from Etudiant,Enseignant where ",callback);
    }

    
};
module.exports=Etudiant;
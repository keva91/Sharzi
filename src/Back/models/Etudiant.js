var db = require('../dbconnection');


var Etudiant={
    

    ObtEtudiant:function(callback)
    {
        return db.query("Select * from Etudiant",callback);
    }

    
};
module.exports=Etudiant;
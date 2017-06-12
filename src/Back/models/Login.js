var db = require('../dbconnection');


var Login={
    

    ObtIdentifiants:function(login,callback)
    {
        return db.query("Select * from identifiant where mdpIde = '"+login.pwd+"' and loginIde='"+login.pseudo+"' ",callback);
    },

    ObtTypeEns:function(login,callback)
    {
        
        console.log(login.idIde)
        return db.query("Select * from enseignant where loginEns = '"+login.idIde+"'  ",callback);
    },
    ObtTypeEtu:function(login,callback)
    {
        return db.query("Select * from etudiant where loginEtu = '"+login.idIde+"'  ",callback);
    }

    
};
module.exports=Login;
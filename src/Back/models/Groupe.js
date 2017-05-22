var db=require('../dbconnection');

var Groupe={
    
    ObtGroupeId:function(id,callback)
    {
        return db.query("select * from Groupe where idG=?",[id],callback);
    },

    ObtGroupeParIdGroupeUtilisat:function(id,callback)
    {
        return db.query("select * from Groupe where idG=?",[id],callback);
    },

    ObtTsGroupes:function(callback)
    {
        return db.query("Select * from Groupe",callback);
    },

    ajouterGroupe:function(Groupe,callback)
    {
        console.log("inside service");
        console.log(Groupe.idG);
        return db.query("Insert into Groupe values(?,?,?)",[Groupe.nomG,Groupe.nbIntervenant,Groupe.idProjet],callback);
    },

    modifierGroupe:function(id,Groupe,callback)
    {
        return  db.query("update Groupe set nomG=?,nbIntervenant=? where idG=?",[Groupe.nomG,Groupe.nbIntervenant,Groupe.idG],callback);
    },

    supprimerGroupe:function(id,callback)
    {
        return db.query("delete from Groupe where idG=?",[id],callback);
    }
};
module.exports=Groupe;
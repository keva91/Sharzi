var db=require('../dbconnection');

var Projet={
   
    ObtProjetById:function(id, callback)
    {
        return db.query("select idP, NoteP from Projet where idP=?",id, callback);
    },
    
    ObtNoteProjet:function(callback)
    {
        return db.query("select idP, NoteP from Projet",callback);
    },

    ObtTsProjets:function(callback)
    {
        return db.query("Select * from Projet",callback);
    },
    
    ajouterProjet:function(Projet,callback)
    {
        console.log("inside service");
        console.log(Projet);
        return db.query("Insert into Projet values(?,?,?,?,?,?)",
        [null,Projet.name, Projet.desc, Projet.date, Projet.dateStart,null],callback);
    },

    modifierProjet:function(id,Projet,callback)
    {
        return  db.query("update Projet set nomP=?, descrP=?, date_finP=?, date_creationP=? where idP=?",
             [Projet.nomP, Projet.descrP, Projet.date_finP, Projet.date_creationP, id],callback);
    },
    
    supprimerProjet:function(id,callback)
    {
        return db.query("delete from Projet where idP=?",[id],callback);
    }

};
module.exports=Projet;
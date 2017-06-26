var db=require('../dbconnection');

var Jalon_Projet={

    ObtJalon_Projet:function(callback)
    {
        return db.query("select * from Jalon_Projet",callback);
    },

    ObtJalon_ProjetById:function(id,callback)
    {
         return db.query("select * from Jalon_Projet where idJalon=?",[id],callback);
    },

    ObtTsJalon_Projets:function(callback)
    {
         return db.query("Select * from Jalon_Projet",callback);
    },

    ObtJalon_ProjetParIdProjet:function(id,callback)
    {
         return db.query("select * from Jalon_Projet where idProjetJP=?",[id],callback);
    },

    ObtFullJalon_ProjetParIdProjet:function(id,callback)
    {
         return db.query("select idJalonJP,commentaireJP,NoteJP,idEtatJP,idJ,nomJ,descrJ,date_debutJ,date_finJ "
           +"from Jalon_Projet,jalon where idProjetJP=? and idJ=idJalonJP",[id],callback);
    },

   ObtFullJalon_Projet:function(callback)
    {
         return db.query("select idJalonJP, idProjetJP,commentaireJP,NoteJP,idEtatJP,idJ,nomJ,descrJ,date_debutJ,date_finJ "
           +"from Jalon_Projet,jalon where idJ=idJalonJP",callback);
    },  

    ObtNbMaxJalons_Projet:function(callback)
     {
         return db.query("SELECT MAX(JProjet) AS JProjet FROM (select count(*) as JProjet "
                + "from Jalon_Projet group by idProjetJP)JProjet;", callback);
     },
      
    ObtNoteDeTsJalon_Projets:function(callback)
    {
         return db.query("Select idProjetJP, noteJP from Jalon_Projet order by idProjetJP", callback);
    },
  
    ajouterJalon_Projet:function(data,callback)
    {
         return db.query("Insert into Jalon_Projet (idJalonJP, idProjetJP) values ?",
         [data],callback);
    },

    modifierJalon_Projet:function(id,Jalon_Projet,callback)
    {
         return  db.query("update Jalon_Projets_Projet set commentaireJ=?, rapportAdr=? noteJP=? where idJalon_Projet=?",
             [Jalon_Projets_Projet.commentaireJP, Jalon_Projets_Projet.rapportAdr, Jalon_Projets_Projet.NoteJP, id],callback);
    },
    modifierNoteJalon_Projet:function(data,callback)
    {
         return  db.query("update Jalon_Projet set NoteJP=? where idJalonJP=?",
             [data.note,data.id],callback);
    },
    
    supprimerJalon_Projet:function(id,callback)
    {
         return db.query("delete from Jalon_Projets_Projet where idJalon_Projet=?",[id],callback);
    },
    supprimerJalon_ProjetByProjetId:function(id,callback)
    {
         return db.query("DELETE FROM jalon_projet WHERE jalon_projet.idProjetJP=?;",[id],callback);
    },
    supprimerJalon_ProjetByJalonId:function(id,callback)
    {
         return db.query("DELETE FROM jalon_projet WHERE jalon_projet.idJalonJP=?;",[id],callback);
    }
};
module.exports=Jalon_Projet;
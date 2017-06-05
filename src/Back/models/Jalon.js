var db=require('../dbconnection');

var Jalon={
    ObtJalonById:function(id,callback)
    {
        return db.query("select * from Jalon where idJ=?",[id],callback);
    },

    ObtTsJalons:function(callback)
    {
        return db.query("Select * from Jalon",callback);
    },

    ObtJalonParIdProjet:function(id,callback)
    {
        return db.query("select * from Jalon j inner join Jalon_Projet jp on jp.idJalon=j.idJ where jp.idProjet=?",[id],callback);
    },
    
    ajouterJalon:function(Jalon,callback)
    {
        console.log("inside service");
        console.log(Jalon.idJ);
        return db.query("Insert into Jalon values(?,?,?,?)",
        [Jalon.nomJ, Jalon.descrJ, Jalon.date_debutJ, Jalon.date_finJ],callback);
    },

    modifierJalon:function(id,Jalon,callback)
    {
        return  db.query("update Jalon set nomG=?, descrJ=?, date_finJ=?, " 
            + "commentaireJ=?, rapportAdr=? where idJ=?",
            [Jalon.nomJ, Jalon.descrJ, Jalon.date_debutJ, Jalon.date_finJ],callback);
    },
    
    supprimerJalon:function(id,callback)
    {
        return db.query("delete from Jalon where idJ=?",[id],callback);
    }

};
module.exports=Jalon;
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
        return db.query("Insert into Jalon values(?,?,?,?,?)",
        [null, Jalon.name,Jalon.desc,Jalon.dateStart,Jalon.date],callback);
    },

    modifierJalon:function(id,Jalon,callback)
    {
        return  db.query("update Jalon set nomJ=?, descrJ=?, date_finJ=? " 
            + " where idJ=?",
            [Jalon.name, Jalon.desc, Jalon.date, id],callback);
    },
    
    supprimerJalon:function(id,callback)
    {
        return db.query("delete from Jalon where idJ=?",[id],callback);
    }

};
module.exports=Jalon;
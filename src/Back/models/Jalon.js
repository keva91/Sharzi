var db=require('../dbconnection');

var Jalon={
    ObtJalonId:function(id,callback)
    {
        return db.query("select * from Jalon where idJ=?",[id],callback);
    },
    
    ObtTsJalons:function(callback)
    {
        return db.query("Select * from Jalon",callback);
    },

    ObtJalonParIdProjet:function(id,callback)
    {
        return db.query("select idNoteJ from Jalon where idProjet=?",[id],callback);
    },

    ObtNbMaxJalonsProjets:function(callback)
    {
        return db.query("SELECT MAX(jalonProjet) AS jalonProjet FROM (SELECT Count(*) AS jalonProjet " 
                 + "FROM jalon j inner join projet p ON j.idProjet = p.idP group by p.idP "
                 + ")jalonProjet;", callback);
    },
    
    ajouterJalon:function(Jalon,callback)
    {
        console.log("inside service");
        console.log(Jalon.idJ);
        return db.query("Insert into Jalon values(?,?,?,?,?,?,?)",
        [Jalon.nomJ, Jalon.descrJ, Jalon.date_finJ, Jalon.commentaireJ, Jalon.idProjet, 
        Jalon.rapportAdr, Jalon.idNoteJ],callback);
    },

    modifierJalon:function(id,Jalon,callback)
    {
        return  db.query("update Jalon set nomG=?, descrJ=?, date_finJ=?, " 
            + "commentaireJ=?, rapportAdr=rapportAdr-? where idJ=?",
            [Jalon.nomJ, Jalon.descrJ, Jalon.date_finJ, Jalon.commentaireJ, 
            Jalon.rapportAdr, id],callback);
    },
    
    supprimerJalon:function(id,callback)
    {
        return db.query("delete from Jalon where idJ=?",[id],callback);
    }

};
module.exports=Jalon;
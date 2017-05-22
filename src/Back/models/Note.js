var db=require('../dbconnection');

var Note={
    
    ObtNoteId:function(id,callback)
    {
        return db.query("select * from Note where idN=?",[id],callback);
    },

    ObtTsNotes:function(callback)
    {
        return db.query("Select * from Note",callback);
    },

    ajouterNote:function(Note,callback)
    {
        console.log("inside service");
        console.log(Note.idN);
        return db.query("Insert into Note values(?,?)",[Note.nomN,Note.note],callback);
    },

    modifierNote:function(id,Note,callback)
    {
        return  db.query("update Note set nomN=?, note=? where idN=?",[Note.nomG,Note.nbIntervenant,Note.idProjet],callback);
    },

    supprimerNote:function(id,callback)
    {
        return db.query("delete from Note where idN=?",[id],callback);
    }
};
module.exports=Note;
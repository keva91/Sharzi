var db=require('../dbconnection');

var Groupe={
    
    ObtGroupeId:function(id, callback)
    {
        return db.query("select * from Groupe where idG=?",id, callback);
    },

    ObtGroupeParIdGroupeUtilisat:function(id, callback)
    {
        return db.query("select * from Groupe where idG=?",id, callback);
    },

    ObtTsGroupes:function(callback)
    {
        return db.query("Select idG, idProjet from Groupe order by idG", callback);
    },

    ajouterGroupe:function(Groupe, callback)
    {
        console.log("inside service");
        console.log(Groupe.idG);
        return db.query("Insert into Groupe values(?,?,?)",[Groupe.nomG,Groupe.nbIntervenant,Groupe.idProjet],callback);
    },

    modifierGroupe:function(id, Groupe, callback)
    {
        return  db.query("update Groupe set nomG=?,nbIntervenant=? where idG=?",[Groupe.nomG,Groupe.nbIntervenant,Groupe.idG],callback);
    },

    supprimerGroupe:function(id, callback)
    {
        return db.query("delete from Groupe where idG=?", id, callback);
    },

    ObtTabNote:function(callback)
    {
        var tab = db.query("select "
                + "g.idG, g.nomG, g.idProjet, p.idNoteP, n.note as noteP, n2.note as noteJ1 "
                + "from groupe g inner join projet p on g.idProjet=p.idP "
	            + "inner join note n on p.idNoteP=n.idN "
                + "inner join jalon j on j.idProjet=p.idP "
                + "inner join note n2 on j.idNoteJ=n2.idN "
                + "order by g.nomG, n2.idN;", callback);

        // console.log(this.tab);

        // for(r in tab)
        // {
        //     if(r[0]==r+1[0])
        //     {
        //         r += r+1[5];
        //     }

        //     r++;
        //     console.log(this.tab);
        // }
        // return this.tab;
    }
};
module.exports=Groupe;
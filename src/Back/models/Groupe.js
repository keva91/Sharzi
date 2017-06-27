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
        return db.query("Select idG, nomG, idProjetG from Groupe order by idG", callback);
    },

    ObtFullGroupes:function(callback)
    {
        return db.query("Select idG,idProjetG,nomG,nbIntervenantG,nomP from Groupe,projet where  idP=idProjetG;", callback);
    },

     ObtDetailGroupe:function(id,callback)
    {
        console.log(id)
        return db.query("Select idG,nomEtu,prenomEtu from Groupe,etudiant where idG=idGroupeEtu and idG=?",[id], callback);
    },

    ajouterGroupe:function(Groupe, callback)
    {
        console.log("ajouterGroupe");
        console.log(Groupe.projet);
        return db.query("Insert into Groupe values(?,?,?,?)",[null,Groupe.name,Groupe.nombre,Groupe.projet],callback);
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
            + "g.idG, g.nomG, g.idProjetG, p.noteP, jp.idJalonJP, jp.noteJP "
            + "from groupe g inner join projet p on g.idProjetG=p.idP "
            + "inner join jalon_projet jp on p.idP=jp.idProjetJP "
            + "order by g.nomG, jp.idJalonJP;", callback);

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
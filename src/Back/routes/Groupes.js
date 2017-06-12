
var express = require('express');
var router = express.Router();
var app = require('../server')
var Groupe =require('../models/Groupe');
var Jalon_Projet = require('../models/Jalon_Projet');
var Projet = require('../models/Projet'); 
var Note = require('../models/Note'); 

app.get('/note',function(req,res,next)
{ 
    var groupe;
    var projet;
    var jalon_projet;
    
    Groupe.ObtTsGroupes(function(err1,rows1)
    { 	
        //  console.log("Resultats Groupes : ");
        //   console.log(rows1);
        //   console.log("---------------------------------");
        groupe = rows1;
    });

    Projet.ObtNoteProjet(function(err2,rows2)
    { 	
        //  console.log("Resultats Projets : ");
        //  console.log(rows2);
        //  console.log("---------------------------------");
        projet = rows2;
    });

    Jalon_Projet.ObtNoteDeTsJalon_Projets(function(err3,rows3)
    {
        //  console.log("Resultats Projets : ");
        //  console.log(rows2);
        //  console.log("---------------------------------");
        jalon_projet = rows3;
    });



    setTimeout(function()
    {
         for (r1 in groupe)
         {
             for(r2 in projet)
             {
                 if(groupe[r1].idProjet == projet[r2].idP)
                 {
                     var a = JSON.stringify(groupe[r1]).substring(0,JSON.stringify(groupe[r1]).length-1) + ",";
                     var b = JSON.stringify(projet[r2]).substring(1,JSON.stringify(projet[r2]).length);
                     var c ="";
                   
                     for(r3 in jalon_projet)
                     {
                         if(projet[r2].idP == jalon_projet[r3].idProjet)
                         {
                             b = JSON.stringify(projet[r2]).substring(1,JSON.stringify(projet[r2]).length-1) + ",";
                             //c += JSON.stringify(jalon_projet[r3]).substring(1,JSON.stringify(jalon_projet[r3]).length-1) +",";
                             c = JSON.stringify(jalon_projet[r3]).substring(1,21) + r3 
                                 + JSON.stringify(jalon_projet[r3]).substring(21,JSON.stringify(jalon_projet[r3]).length-1) + ",";
                         }

                     }
                     abc = a + b + c.substring(0,c.length-1) + " }";
                     abc = JSON.parse(abc);
                     console.log(abc);
                     groupe[r1] = abc;
                 }
             }
         }
        
        groupe = JSON.parse(JSON.stringify(groupe));
         //console.log(groupe);
         //res.send(groupe);

         // console.log("Résultat Concaténé : ");
         // console.log(data);
         // console.log("---------------------------------");

     }, 2000);
  
        // for(r in rows2)
        // {
        //      Projet.ObtProjetById(rows2[r].idProjet, function(err, rows3)
            //  {

            //     //  console.log(rows2[r].idProjet);
            //     console.log(rows2[r].idProjet)

            //     //  this.groupe += JSON.parse(JSON.stringify(rows2[r], rows10[0].idNoteP));

            //     //  console.log("Resultat après insertion projet :")
            //     //  console.log(this.groupe);
            //     //  console.log("---------------------------------");
            // });
        // }
        
    // });
});

    // Jalon_Projet.ObtNbMaxJalons_Projet(function(err1,rows1){
    //       if(err1)
    //          res.send(err1);
    //       else
    //       {
	// 		 console.log(rows1);
    //          Groupe.ObtTsGroupes(function(err2,rows2)
    //          {
    //              if(err2)
    //                  res.send(err2);
    //              else
    //              {
	// 				console.log(rows2);
	// 				for(r in rows2)
    //                 {

    // 					Projet.ObtProjetById(rows2[r].idProjet,function(err3,rows3)
    // 					{
    //                         console.log(r);

    //                         console.log(rows2[r].idProjet)
    //                         console.log("A");
    //                         console.log(rows3);
						
	// 						if(err3)
	// 							res.send(err3);
	// 						else
	// 						{
	// 							console.log(rows3);
	// 							this.dataGroup = row3;
	// 						}

	// 				    });
    //                 }
    //              }
    //          });
    //       }
    // });

    // var c;

    // Groupe.ObtTsGroupes(function(err,rows)
    // {
    //     if(err)
    //         res.send(err);
    //     else 
    //     {
    //         Projet.ObtTsProjets(function(err,rows2)
    //         {
    //             if(err)
    //                 res.send(err);
    //             else 
    //             {
    //                 this.c =  JSON.parse(JSON.stringify([rows, rows2]));
    //                 //console.log(this.c);
    //                 console.log(this.c[0][0].idProjet);
    //                 res.send(this.c);
    //             }
    //         });
    //     }
    // });

    //  var a;
    //  var b;
    //  var c;

    //  Jalon.ObtNbMaxJalonsProjets(function(err,rows1){
    //        if(err)
    //           res.send(err);
    //      else
    //        {

    //           //res.send(rows, rows);
    //           //console.log(rows);
    //           //this.nbMaxJP = rows[0].jalonProjet;
    //           //console.log(this.a);

    //          Groupe.ObtTabNote(function(err,rows2)
    //          {
    //              if(err)
    //                  res.send(err);
    //              else 
    //              {
    //                  // res.send([rows] + [rows2]);
    //                  // this.dataGroup = rows;
    //                  //console.log(this.b);

    //          console.log(rows1);
    //          console.log(rows2);
    //          console.log(JSON.stringify(rows1 + rows2));

    //          var concatTab = rows1.concat(rows2)

    //          res.send(rows1 + [] + rows2);
    //              }
    //          });
    //        }
    //  });

    // var dataTab;
    // var nbMaxJP;
    // var dataGroup;
    // var dataProjet;
    // var dataJalon;

    //  Jalon.ObtNbMaxJalonsProjets(function(err1,rows1){
    //       if(err1)
    //          res.send(err1);
    //       else
    //       {
    //          //res.send(rows)
    //          //console.log(rows);
    //          //this.nbMaxJP = rows;
    //          //console.log(this.nbMaxJP);

    //          Groupe.ObtTsGroupes(function(err2,rows2)
    //          {
    //              if(err2)
    //                  res.send(err2);
    //              else
    //              {
    //                  for(r in rows2)
    //                  {
    //                      this.dataTab += row1 + rows2;
    //                  }
    //                  console.log(this.dataTab);
    //                  // this.dataGroup
    //                  // console.log(this.dataGroup);
                   
    //                  // for(r in this.dataGroup)
    //                  // {
    //                  //     this.dataGroup += this.nbMaxJP + this.dataGroup[r];
    //                  // }
                    
    //                  // console.log(this.dataGroup);

    //                  res.send(this.dataTab);  
    //              }
            
    //             // while(dataGroup.next())
    //             // { 
    //             //     Projet.ObtProjetById(dataGroup[1],function(err,rows)
    //             //     {
    //             //         if(err)
    //             //             res.json(err);
    //             //         else
    //             //         {
    //             //             this.dataProjet= rows;
    //             //             console.log(this.dataProjet);
    //             //         }    

    //             //         Note.ObtNoteId(dataProjet[1], function(err, rows)
    //             //         {
    //             //             if(err)
    //             //                 res.json(err);
    //             //             else
    //             //             {
    //             //                 this.dataProjet += rows;
    //             //                 console.log(this.dataProjet);
    //             //             }
    //             //         });

    //             //         Jalon.ObtJalonParIdProjet(dataProjet[0],function(err,rows)
    //             //         {
    //             //             if(err)
    //             //                 res.json(err);
    //             //             else
    //             //             {
    //             //                 while (rows)
    //             //                 {
    //             //                     this.dataJalon += rows;
    //             //                 }
    //             //                 console.log(this.dataJalon);
    //             //             }
    //             //         });
    //             //         this.dataProjet += this.dataJalon;
    //             //     });
    //             //     this.dataGroup += this.dataProjet;
    //             // }
    //             // this.dataTab += this.dataGroup;
    //             // console.log(this.dataTab);
    //             //res.send(dataTab);
    //             //console.log(this.dataGroup);
    // //         });
    // //    }
    // // });
// });
module.exports=Groupe;
    

router.get('/:id?',function(req,res,next)
{
    if(req.params.id)
    {
        Groupe.ObtGroupeId(req.params.id,function(err,rows)
        {
            if(err)
                res.json(err);
            else
                res.json(rows);
        });

        Groupe.ObtGroupeParIdGroupeUtilisat(req.params.id,function(err,rows)
        {
            if(err)
                res.json(err);
            else
                res.json(rows);
        });
    }
    else
    {
        Groupe.ObtTtGroupe(function(err,rows)
        {
            if(err)
            res.json(err);
            else
            res.json(rows);
        });
    }
});


router.post('/GroupAjout',function(req,res,next)
{
    Groupe.ajouterGroupe(req.body,function(err,count)
    {
        if(err)
            res.json(err);
        else
            res.json(req.body);//or return count for 1 &amp;amp;amp; 0
    });

    Groupe.modifierGroupe(function(err,rows)
    {
        if(err)
            res.json(err); 
        else
            res.json(rows);
    });

     Groupe.supprimerGroupe(req.params.id,function(err,count){
         if(err)
             res.json(err);
         else
             res.json(count);
     });


});
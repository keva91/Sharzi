import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Http, Headers} from '@angular/http'

@Component({
  selector: 'app-ens-note',
  templateUrl: './ens-note.component.html',
  styleUrls: ['./ens-note.component.css']
})
export class EnsNoteComponent implements OnInit {

  loading = false;
  mydata;
  maxJP;
  rangeMax;
  tabnotes;
  dataTabNote;
  jalonP;  

  button = false;

  constructor(
    private router: Router,
    private http: Http
  ){
  }

  ngOnInit() {
    return this.testnote();
    
  }

   testnote(){
    
    let headers = new Headers();
    // return this.http.get('http://localhost:3000/note').subscribe(function(response){
    //   console.log(response.json())
    //   return this.mydata = response.json()[0].jalonProjet
    //   //console.log(this.mydata)

    this.http.get('http://localhost:3000/note')
      .map(res => res.json())
      .subscribe(data =>{
       
        // console.log("--------- ALL DATA -------------");
        // console.log(data);
        // console.log("--------- Tab 0 Data -------------");
        // console.log(data[0]);
        // console.log("--------- Nb Max Jalon Projet -------------");
        // console.log(data[0][0].JProjet);
        // console.log("--------- Tab 1 Data -------------");
        // console.log(data[1]);
        // console.log("--------- Tab 1 Ligne 0 Data -------------");
        // console.log(data[1][0]);
        // console.log("--------- Tab 1 Ligne 0 NomG Data -------------");
        // console.log(data[1][0].nomG);
       
      this.maxJP = data[0][0].JProjet;
      this.jalonP = data[3];
      // console.log("------------ data[0] -------------");
      // console.log(data[0]);
  
      // console.log("------------ data[1] -------------");
      // console.log(data[1]);
        
      // console.log("------------ data[2] -------------");
      // console.log(data[2]);
 
      // console.log("------------ data[3] -------------");
      // console.log(data[3]);

      //  this.dataTabNote = data[1];
      //this.dataTabNote = data;

        //  return this.mydata = data[0].jalonProjet;


        return this.mydata = data;

     })
  }
     nbJP(groupeactuel){
       var nbjalonProjetGr = 0;
       var tdrestant = [];

       this.jalonP.forEach(element => {
         if(element.idProjetJP==groupeactuel)
         {
            nbjalonProjetGr++;
         }
       });

       var restant=this.maxJP-nbjalonProjetGr;
       while(restant>0)
       {
            tdrestant.push(nbjalonProjetGr);
            restant--;
       }
       return tdrestant;
     }

     createRange(){
     var number = this.maxJP;
     this.rangeMax = [];
     for(var i = 1; i <= number; i++){
        this.rangeMax.push(i);
     }
     return this.rangeMax;
   }
}

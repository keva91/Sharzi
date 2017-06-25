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
       this.dataTabNote = data[1];
       
        //  return this.mydata = data[0].jalonProjet;
        return this.mydata = data;

     })
  }

    createRange(){
    var number = this.maxJP;
    this.rangeMax = [];
    for(var i = 1; i <= number; i++){
       this.rangeMax.push(i);
    }
    return this.rangeMax;
  }

grprecedent = null;
gractuel = null;

  // tabnotejp(dataTab){
  //   var number = this.maxJP;
  //   this.tabnotes = [];
  //   for( this.dataTabNote in this.dataTabNote)
  //   {
  //     if (this.verifgroupelist(dataTab) == true)
  //      {
  //        this.tabnotes.push(this.dataTabNote.noteJP);
  //      }
  //   }
  //   return this.tabnotes;
  // }
  //     verifgroupelist(identifiantG){
  //      this.gractuel = identifiantG.idG;
  //      if(this.grprecedent==null || this.grprecedent != this.gractuel)
  //      {
  //        this.grprecedent = this.gractuel;
  //        return true;
  //      }
  //      else 
  //     {
  //       return false;
  //     }
  //   }

}

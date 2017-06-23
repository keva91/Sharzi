import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Http, Headers} from '@angular/http'

@Component({
  selector: 'app-ens-projet',
  templateUrl: './ens-projet.component.html',
  styleUrls: ['./ens-projet.component.css']
})
export class EnsProjetComponent implements OnInit {

  constructor(private http: Http) { }

  selectedTab = 0;
  listProjets  = [];


  tabs = [
          { title: 'Liste Projets', type: "list"}
        ]



  ngOnInit() {
    this.getProjets();
    
  }


  getProjets(){
    let headers = new Headers();
    this.http.get('http://localhost:3000/projet').map(res => res.json()).subscribe(data =>{
      console.log(data);
      this.listProjets = data;

    })

  }

  callbacksFunctions =  { 
    cancel : this.cancel.bind(this)
    
  }

  cancel(res){
    if(res){
      this.getProjets();
    }
    this.tabs.splice(1, 1,);
  }
    

  addProjet(){
    if(!(this.tabs.length > 1) ){
      this.tabs.push({ title: 'Creation Projet', type: 'creationProjet'});
      this.selectedTab = 1;
    }    
  }

  addJalon(){
    if(!(this.tabs.length > 1) ){
      this.tabs.push({ title: 'Creation Jalon', type: 'creationJalon'});
      this.selectedTab = 1;
    }    
  }



}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Http, Headers} from '@angular/http'

@Component({
  selector: 'app-ens-projet',
  templateUrl: './ens-projet.component.html',
  styleUrls: ['./ens-projet.component.css']
})
export class EnsProjetComponent implements OnInit {

  constructor(public fbP: FormBuilder,private http: Http) { }

  selectedTab = 0;

  projets = [
    {nom:'projet 1', description:'Descrition du projet 1',date: new Date('2017/06/28')    },
    {nom:'projet 2', description:'Descrition du projet 2',date: new Date('2017/06/25')    }
  ]


  tabs = [
          { title: 'Liste Projets', type: "list"}
        ]



  ngOnInit() {
    //this.getProjets();
    
  }


  getProjets(){
    let headers = new Headers();
    this.http.get('http://localhost:3000/projet').map(res => res.json()).subscribe(data =>{
      console.log(data);

    })

  }

  callbacksFunctions =  { 
    cancel : this.cancel.bind(this)
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

  cancel(){
    console.log(this.tabs.length)
    this.tabs.splice(1, 1,);
  }

  public projetForm = this.fbP.group({
    name: ["", Validators.required],
    date: ["", Validators.required],
    desc: ["", Validators.required]
  });
 
  createProjet(event) {
    console.log(event);
    console.log(this.projetForm.value);
    this.projets.push({ nom: this.projetForm.value.name, description: this.projetForm.value.desc, date:this.projetForm.value.date});
    this.tabs.splice(1, 1,)
    this.selectedTab = 0;
    console.log(this.projets)
  }

}

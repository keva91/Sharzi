import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ens-projet',
  templateUrl: './ens-projet.component.html',
  styleUrls: ['./ens-projet.component.css']
})
export class EnsProjetComponent implements OnInit {

  constructor(public fbP: FormBuilder) { }

  selectedTab = 0;

  projets = [
    {nom:'projet 1', description:'Descrition du projet 1',date: new Date('2017/06/28')    },
    {nom:'projet 2', description:'Descrition du projet 2',date: new Date('2017/06/25')    }
  ]


  tabs = [
          { title: 'Liste Projets', type: "list"}
        ]

  test = function(){
    console.log("test")
  }

  ngOnInit() {
    
  }
  addTab(){
    if(!(this.tabs.length > 1) ){
      this.tabs.push({ title: 'Creation Projet', type: 'creation'});
      this.selectedTab = 1;
      }    
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

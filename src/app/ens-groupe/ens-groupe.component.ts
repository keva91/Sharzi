import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ens-groupe',
  templateUrl: './ens-groupe.component.html',
  styleUrls: ['./ens-groupe.component.css']
})
export class EnsGroupeComponent implements OnInit {

 constructor(public fbG: FormBuilder) { }

  selectedTab = 0;

   projets = [
    {nom:'projet 1', description:'Descrition du projet 1',date: new Date('2017/06/28')    },
    {nom:'projet 2', description:'Descrition du projet 2',date: new Date('2017/06/25')    }
  ]

  groupes = [
    {nom:'groupe 1', nombre:'3',  projet: this.projets[0]   },
    {nom:'groupe 2', nombre:'4',  projet: this.projets[1] }
  ]

 


  tabs = [
          { title: 'Liste Groupes', type: "list"}
        ]

  test = function(){
    console.log("test")
  }

  ngOnInit() {
    
  }
  addTab(){
    console.log(this.tabs.length)
    if(!(this.tabs.length > 1) ){
      this.tabs.push({ title: 'Creation Groupe', type: 'creation'});
      this.selectedTab = 1;
      }    
  }

  public groupeForm = this.fbG.group({
    name: ["", Validators.required],
    nombre: ["", Validators.required],
    projet: ["", Validators.required],
  });
 
  createGroupe(event) {
    console.log(event);
    console.log(this.groupeForm.value);
    this.groupes.push({ nom: this.groupeForm.value.name, nombre: this.groupeForm.value.nombre, projet:this.groupeForm.value.projet});
    this.tabs.splice(1, 1,)
    this.selectedTab = 0;
    console.log(this.groupes)
  }

}

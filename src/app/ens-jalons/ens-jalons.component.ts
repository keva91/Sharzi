import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ens-jalons',
  templateUrl: './ens-jalons.component.html',
  styleUrls: ['./ens-jalons.component.css']
})
export class EnsJalonsComponent implements OnInit {

constructor(public fbJ: FormBuilder) { }

  selectedTab = 0;

   projets = [
    {nom:'projet 1', description:'Descrition du projet 1',date: new Date('2017/06/28')    },
    {nom:'projet 2', description:'Descrition du projet 2',date: new Date('2017/06/25')    },
    {nom:'projet 3', description:'Descrition du projet 3',date: new Date('2017/06/29')    }
  ]

  jalons = [
    {nom:'jalon 1', date:new Date('2017/05/10'),  projets:[this.projets[0],this.projets[1],this.projets[2]] ,description:'Descrition du jalon 1'   },
    {nom:'jalon 2', date:new Date('2017/06/01'),  projets:[this.projets[0],this.projets[1],this.projets[2]], description:'Descrition du jalon 2' },
    {nom:'jalon 3', date:new Date('2017/06/29'),  projets:[this.projets[0],this.projets[1],this.projets[2]], description:'Descrition du jalon 3' }
  ]

 


  tabs = [
          { title: 'Liste Jalons', type: "list"}
        ]



  ngOnInit() {
    
  }


  addTab(){
    console.log(this.tabs.length)
    if(!(this.tabs.length > 1) ){
      this.tabs.push({ title: 'Creation Jalon', type: 'creation'});
      this.selectedTab = 1;
      }    
  }

  cancel(){
    console.log(this.tabs.length)
    this.tabs.splice(1, 1,);
      
  }

  public jalonsForm = this.fbJ.group({
    name: ["", Validators.required],
    date: ["", Validators.required],
    listProjets: ["", Validators.required],
  });
 
  createJalon(event) {
    console.log(event);
    console.log(this.jalonsForm.value);
    this.jalons.push({ nom: this.jalonsForm.value.name, date: this.jalonsForm.value.date, projets:this.jalonsForm.value.projet,description:this.jalonsForm.value.projet});
    this.tabs.splice(1, 1,)
    this.selectedTab = 0;
    console.log(this.jalons)
  }

}

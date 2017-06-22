import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ens-jalons-create',
  templateUrl: './ens-jalons-create.component.html',
  styleUrls: ['./ens-jalons-create.component.css']
})
export class EnsJalonsCreateComponent implements OnInit {

constructor(public fbJ: FormBuilder) { }

@Input() callback ;

  selectedTab = 0;

   projets = [
    {nom:'projet 1', description:'Descrition du projet 1',date: new Date('2017/06/28')    },
    {nom:'projet 2', description:'Descrition du projet 2',date: new Date('2017/06/25')    },
    {nom:'projet 3', description:'Descrition du projet 3',date: new Date('2017/06/29')    }
  ]


 



  ngOnInit() {
    
  }
  onMultiple(ev){
    console.log(ev)

  }



  public jalonsForm = this.fbJ.group({
    name: [null, Validators.required],
    date: [null, Validators.required],
    list: [null,Validators.required],
  });
 
  createJalon(event) {
    console.log(event);
    console.log(this.jalonsForm.value);
    
  
  }

}

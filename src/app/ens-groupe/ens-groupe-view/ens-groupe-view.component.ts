import { Component, OnInit,OnChanges,Input } from '@angular/core';
import {MdSnackBar} from '@angular/material';


@Component({
  selector: 'app-ens-groupe-view',
  templateUrl: './ens-groupe-view.component.html'
  
})
export class EnsGroupeViewComponent implements OnInit,OnChanges{

  @Input() callback;
  @Input() groupe;
  @Input() etudiants;


  constructor(
    public snackBar: MdSnackBar) { 
      
  }


  ngOnChanges(changes) {
    console.log(changes);
    
    if(this.etudiants && changes.etudiants){
      this.etudiants = changes.etudiants.currentValue;
      console.log(this.etudiants)
    }
        
  }

  
     


  ngOnInit() {
    console.log(this.groupe)
    console.log(this.etudiants)
       
  }

}
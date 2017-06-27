import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Http, Headers} from '@angular/http'
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-ens-groupe-create',
  templateUrl: './ens-groupe-create.component.html'
})
export class EnsGroupeCreateComponent implements OnInit {


@Input() projets;
@Input() callback;

  constructor(
    public fbG: FormBuilder,
    private http: Http,
    public snackBar: MdSnackBar) { }

  selectedTab = 0;
  submitted = false;
  public groupeForm;  
  



  ngOnInit() {

    console.log(this.callback)   
    console.log(this.projets)   

    this.groupeForm = this.fbG.group({
        name: [null , Validators.required],
        nombre: [null, Validators.required],
        projet: [null,Validators.required],
    });
      
  }



  

  validerGroupe(event) {
      this.submitted = true;

      if( this.groupeForm.valid ) {

        console.log(this.groupeForm.value)
        this.groupeForm.value.projet = this.groupeForm.value.projet.idP;
        console.log(this.groupeForm.value) 

        //Creation
        console.log('creation')
        
        this.http.post('http://localhost:3000/groupe',this.groupeForm.value).map(res => res.json()).subscribe(data =>{
          console.log(data);
          if(data){
            this.snackBar.open('Groupe enregistré !','', {
                  duration: 2500, extraClasses:['snackbarSuccess']
            });
            this.callback.cancel('yes');
          }

        })

       

      }

    
    }




}

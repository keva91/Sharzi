import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Http, Headers} from '@angular/http';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-ens-projet-create',
  templateUrl: './ens-projet-create.component.html',
  styleUrls: ['./ens-projet-create.component.css']
})
export class EnsProjetCreateComponent implements OnInit {

  @Input() callback;
  @Input() projet;

  constructor(
    public fbP: FormBuilder,
    private http: Http,
    public snackBar: MdSnackBar) { }

  selectedTab = 0;
  creationMode;
  submitted = false;
  public projetForm;

  


  ngOnInit() {

    this.projetForm = this.fbP.group({
        name: [this.projet ? this.projet.nomP : null , Validators.required],
        date: [this.projet ? this.projet.date_finP : null, Validators.required],
        desc: [this.projet  ? this.projet.descrP : null]
    });


    console.log(this.callback)   
    console.log(this.projet) 

    if(!this.projet){
      this.projet = {};
      this.creationMode = true
      
    }else{
      this.creationMode = false
      console.log('edit')
      console.log(this.projetForm)
    
    }
     
  }





  
 
  validProjet(event) {
    this.submitted = true;

    if( this.projetForm.valid ) {

      if(this.creationMode){

        //Creation
        console.log('creation')
    
        this.projetForm.value.dateStart = new Date().toISOString().substring(0, 10);
        this.projetForm.value.date = this.projetForm.value.date.toISOString().substring(0, 10);
        
        this.http.post('http://localhost:3000/projet',this.projetForm.value).map(res => res.json()).subscribe(data =>{
          console.log(data);
          if(data){
            this.snackBar.open('Projet enregistré !','', {
                  duration: 2500, extraClasses:['snackbarSuccess']
            });
            this.callback.cancel('yes');
          }

        })

      }else{

      //Edition
        console.log('Edition')
    
      
        this.projetForm.value.dateStart = new Date(this.projet.date_creationP).toISOString().substring(0, 10);
        this.projetForm.value.date = new Date(this.projetForm.value.date).toISOString().substring(0, 10);
        this.projetForm.value.id = this.projet.idP;
        
        this.http.put('http://localhost:3000/projet/'+this.projet.idP,this.projetForm.value).map(res => res.json()).subscribe(data =>{
          console.log(data);
          if(data){
            this.snackBar.open('Projet modifié !','', {
                  duration: 2500, extraClasses:['snackbarSuccess']
            });
            this.callback.cancel(this.projet.idP,'edit');
          }

        })
          
      }

    }

  
  }

}

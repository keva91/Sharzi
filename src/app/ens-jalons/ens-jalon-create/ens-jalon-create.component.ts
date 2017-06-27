import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Http, Headers} from '@angular/http'
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-ens-jalon-create',
  templateUrl: './ens-jalon-create.component.html',
  styleUrls: ['./ens-jalon-create.component.css']
})
export class EnsJalonCreateComponent implements OnInit {

 @Input() callback;
 @Input() jalon;
 @Input() projets;

  constructor(
    public fbJ: FormBuilder,
    private http: Http,
    public snackBar: MdSnackBar) { }

  selectedTab = 0;
  creationMode;
  submitted = false;
  public jalonsForm;

  selectedProjects = [];


  
  



  ngOnInit() {

    console.log(this.callback)   
    console.log(this.jalon) 

    if(!this.jalon){
      console.log('create')
      this.creationMode = true
      this.jalon = {};
      console.log(this.jalon)
      
      this.jalonsForm = this.fbJ.group({
          name: [null , Validators.required],
          date: [null, Validators.required],
          desc: [null],
          list: [null,Validators.required],
      });
          
    }else{
      this.creationMode = false
      console.log('edit')
      console.log(this.jalon)
      this.jalonsForm = this.fbJ.group({
          name: [this.jalon ? this.jalon.nomJ : null , Validators.required],
          date: [this.jalon ? this.jalon.date_finJ : null, Validators.required],
          desc: [this.jalon ? this.jalon.descrJ : null]
      });
      console.log(this.jalonsForm)
    
    }

  }


  onMultiple(ev){
    console.log(ev)
    this.selectedProjects = ev;
  }







  validerJalon(event) {
      this.submitted = true;

      if( this.jalonsForm.valid ) {

        if(this.creationMode){

          //Creation
          console.log('creation')
      
          this.jalonsForm.value.dateStart = new Date().toISOString().substring(0, 10);
          this.jalonsForm.value.date = this.jalonsForm.value.date.toISOString().substring(0, 10);
          this.jalonsForm.value.list = this.selectedProjects
          
          this.http.post('http://localhost:3000/jalon',this.jalonsForm.value).map(res => res.json()).subscribe(data =>{
            console.log(data);
            if(data){
              this.snackBar.open('Jalon enregistré !','', {
                    duration: 2500, extraClasses:['snackbarSuccess']
              });
              this.callback.cancel('yes');
            }

          })

        }else{

        //Edition
          console.log('Edition')
      
        
          this.jalonsForm.value.date = new Date(this.jalonsForm.value.date).toISOString().substring(0, 10);
          this.jalonsForm.value.id = this.jalon.idP;
          
          this.http.put('http://localhost:3000/jalon/'+this.jalon.idJ,this.jalonsForm.value).map(res => res.json()).subscribe(data =>{
            console.log(data);
            if(data){
              this.snackBar.open('Jalon modifié !','', {
                    duration: 2500, extraClasses:['snackbarSuccess']
              });
              this.callback.cancel(this.jalon.idJ,'edit');
            }

          })
            
        }

      }

    
    }




}

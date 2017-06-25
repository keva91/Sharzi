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

  constructor(
    public fbP: FormBuilder,
    private http: Http,
    public snackBar: MdSnackBar) { }

  selectedTab = 0;

  


  ngOnInit() {
    console.log(this.callback)   
     
  }





  public projetForm = this.fbP.group({
    name: ["", Validators.required],
    date: ["", Validators.required],
    desc: ["", Validators.required]
  });
 
  createProjet(event) {
    console.log(event);
    console.log(this.projetForm.value);
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
  
  }

}

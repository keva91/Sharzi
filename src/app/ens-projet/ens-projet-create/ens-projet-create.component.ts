import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Http, Headers} from '@angular/http'

@Component({
  selector: 'app-ens-projet-create',
  templateUrl: './ens-projet-create.component.html',
  styleUrls: ['./ens-projet-create.component.css']
})
export class EnsProjetCreateComponent implements OnInit {

  @Input() test ;

  constructor(public fbP: FormBuilder,private http: Http) { }

  selectedTab = 0;

  


  ngOnInit() {
    console.log(this.test)
  
    console.log(new Date().toISOString().substring(0, 10));
    console.log(new Date(Date.now()).toLocaleString())
    
     
  }



  /*cancel(){
    this.test;
  }*/

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

    })
  
  }

}

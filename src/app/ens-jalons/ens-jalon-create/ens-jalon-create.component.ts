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

  constructor(
    public fbJ: FormBuilder,
    private http: Http,
    public snackBar: MdSnackBar) { }

  @Input() callback ;
  @Input() projets ;

  submitted = false;

  selectedProjects = []

  selectedTab = 0;

  /*projets = [
    {nom:'projet 1', description:'Descrition du projet 1',date: new Date('2017/06/28')    },
    {nom:'projet 2', description:'Descrition du projet 2',date: new Date('2017/06/25')    },
    {nom:'projet 3', description:'Descrition du projet 3',date: new Date('2017/06/29')    }
  ]*/


  
  public jalonsForm = this.fbJ.group({
    name: [null, Validators.required],
    date: [null, Validators.required],
    desc: [''],
    list: [null,Validators.required],
  });



  ngOnInit() {
    
  }

  onMultiple(ev){
    console.log(ev)
    this.selectedProjects = ev;


  }



  
  
  createJalon(event) {
    this.submitted = true;
    console.log(this.jalonsForm)

    if( this.jalonsForm.valid ) {
      console.log('valid')
      this.jalonsForm.value.list = this.selectedProjects
      this.jalonsForm.value.dateStart = new Date().toISOString().substring(0, 10);
      this.jalonsForm.value.date = this.jalonsForm.value.date.toISOString().substring(0, 10);
      console.log(this.jalonsForm.value);
      
      this.http.post('http://localhost:3000/jalon',this.jalonsForm.value).map(res => res.json()).subscribe(data =>{
        console.log(data);
        if(data){
          this.snackBar.open('Jalon enregistré !','', {
              duration: 2500, extraClasses:['snackbarSuccess']
          });
          this.callback.cancel();
        }
        

      })
    }
    
    

  }
}

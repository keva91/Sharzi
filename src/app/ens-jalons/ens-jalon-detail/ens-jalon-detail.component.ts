import { Component, OnInit,Inject } from '@angular/core';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import {MD_DIALOG_DATA} from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import {Http, Headers} from '@angular/http';
import {MdSnackBar} from '@angular/material';


@Component({
  selector: 'ens-jalon-detail-dialog',
  templateUrl: './ens-jalon-detail.component.html'
})
export class EnsJalonDetailComponent implements OnInit{

  jalon 

  constructor(
    public dialogRef: MdDialogRef<any>,
    @Inject(MD_DIALOG_DATA) public data: any,
    public fbJ: FormBuilder,
    private http: Http,
    public snackBar: MdSnackBar) { 
      this.jalon = data;
  }

  public jalonForm = this.fbJ.group({
      note: [null,]
  });

  modifyJalon(event){

    console.log('modify')


    if( this.jalonForm.value.note ) {
      this.jalonForm.value.id = this.jalon.idJalonJP
      
      
      this.http.put('http://localhost:3000/Jalon-Projet/projet',this.jalonForm.value).map(res => res.json()).subscribe(data =>{
        console.log(data);
        if(data){
          this.snackBar.open('Jalon modifié !','', {
              duration: 2500, extraClasses:['snackbarSuccess']
          });
          this.dialogRef.close(true)
          
        }
        

      })
    }
  }
     


  ngOnInit() {
    
  }

}
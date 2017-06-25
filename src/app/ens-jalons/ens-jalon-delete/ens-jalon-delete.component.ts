import { Component, OnInit,Inject } from '@angular/core';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import {Http, Headers} from '@angular/http';
import {MdSnackBar} from '@angular/material';
import {MD_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'ens-jalon-delete-dialog',
  templateUrl: './ens-jalon-delete.component.html'
})
export class EnsJalonDeleteComponent implements OnInit{
 
  public jalonId

  constructor(
    public dialogRef: MdDialogRef<any>,
    private http: Http,
    public snackBar: MdSnackBar,
    @Inject(MD_DIALOG_DATA) public data: any) { 
      this.jalonId = data;
      
  }

  
  ngOnInit() {
    
  }

  deleteJalon(){

    console.log('delete')
    let headers2 = new Headers();
      
      
    this.http.delete('http://localhost:3000/jalon/'+this.jalonId).map(res => res.json()).subscribe(data =>{
      console.log(data);
      if(data){
        this.snackBar.open('Jalon supprimé !','', {
            duration: 2500, extraClasses:['snackbarSuccess']
        });
        this.dialogRef.close(true)
      }
      

    })
    
  }
     



}
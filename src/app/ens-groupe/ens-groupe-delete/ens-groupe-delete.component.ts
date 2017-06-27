import { Component, OnInit,Inject } from '@angular/core';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import {Http, Headers} from '@angular/http';
import {MdSnackBar} from '@angular/material';
import {MD_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'ens-groupe-delete-dialog',
  templateUrl: './ens-groupe-delete.component.html'
})
export class EnsGroupeDeleteComponent implements OnInit{
 
  public groupeId

  constructor(
    public dialogRef: MdDialogRef<any>,
    public snackBar: MdSnackBar,
    private http: Http,
    @Inject(MD_DIALOG_DATA) public data: any) { 
      this.groupeId = data;
      
  }

  
  ngOnInit() {
    console.log(this.groupeId)
    
  }

  deleteGroupe(){

    console.log('delete')
    let headers2 = new Headers();

    console.log(this.groupeId)
      
      
    this.http.delete('http://localhost:3000/groupe/'+this.groupeId).map(res => res.json()).subscribe(data =>{
      console.log(data);
      if(data){
        this.snackBar.open('Groupe supprimé !','', {
            duration: 2500, extraClasses:['snackbarSuccess']
        });
        this.dialogRef.close(true)
      }
      

    })
    
  }
     



}
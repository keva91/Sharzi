import { Component, OnInit,Inject } from '@angular/core';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import {Http, Headers} from '@angular/http';
import {MdSnackBar} from '@angular/material';
import {MD_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'ens-projet-delete-dialog',
  templateUrl: './ens-projet-delete.component.html'
})
export class EnsProjetDeleteComponent implements OnInit{
 
  public projetId

  constructor(
    public dialogRef: MdDialogRef<any>,
    private http: Http,
    public snackBar: MdSnackBar,
    @Inject(MD_DIALOG_DATA) public data: any) { 
      this.projetId = data;
      
  }

  
  ngOnInit() {
    
  }

  deleteProjet(){

    console.log('delete')
    let headers2 = new Headers();
      
      
    this.http.delete('http://localhost:3000/projet/'+this.projetId).map(res => res.json()).subscribe(data =>{
      console.log(data);
      if(data){
        this.snackBar.open('Projet supprimé !','', {
            duration: 2500, extraClasses:['snackbarSuccess']
        });
        this.dialogRef.close(true)
      }
      

    })
    
  }
     



}
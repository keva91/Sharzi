import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Http, Headers} from '@angular/http';
import {MdSnackBar,MdDialog} from '@angular/material';
import { EnsJalonDeleteComponent } from '../ens-jalons/ens-jalon-delete/ens-jalon-delete.component';

@Component({
  selector: 'app-ens-jalons',
  templateUrl: './ens-jalons.component.html',
  styleUrls: ['./ens-jalons.component.css']
})
export class EnsJalonsComponent implements OnInit {

constructor(
  private http: Http,
  public dialog: MdDialog) { }

  selectedTab = 0;
  jalonSelected = null;
  disabled = false

  listJalons  = [];
  listProjets  = [];




  getJalons(){
      let headers = new Headers();
      this.http.get('http://localhost:3000/jalon/').map(res => res.json()).subscribe(data =>{
        console.log(data);
        this.listJalons = data;

      })
  }

  getProjets(){
    let headers = new Headers();
    this.http.get('http://localhost:3000/projet').map(res => res.json()).subscribe(data =>{
      console.log(data);
      this.listProjets = data;

    })
  }
 


  tabs = [
          { title: 'Liste Jalons', type: "list"}
  ]




  ngOnInit() {
    this.getJalons();    
    this.getProjets();    
  }



  callbacksFunctions =  { 
    cancel : this.cancel.bind(this),
    editjalon : this.editJalon.bind(this)
  }

  cancel(res,from){
    if(res){
      this.getJalons();
    }

    if(this.tabs.length > 2 ){
      if(from && from == 'edit'){
        console.log('edit')
      }
      this.tabs.splice(2, 1,);
      this.disabled = false

    }else{
      this.tabs.splice(1, 1,);
      this.disabled = false
    }
  }


 
  addJalon(){
    if(!(this.tabs.length > 1) ){
      this.tabs.push({ title: 'Creation Jalon', type: 'creationJalon'});
      this.selectedTab = 1;
    }   
    this.disabled = true; 
  }


  editJalon(jalon){
    console.log('in edit')
    console.log(jalon)
    this.jalonSelected = jalon;
    this.tabs.push({ title: 'Edition Jalon', type: 'editionJalon'});
      
    if(this.tabs.length > 1){
      this.selectedTab = 2;
    }else{
      this.selectedTab = 1;
    }    
    this.disabled = true; 
  }

   detailJalon(jalon){
      if(!(this.tabs.length > 1) ){
        console.log('in')
        this.jalonSelected = jalon
        this.tabs.push({ title: 'Detail Jalon', type: 'detailJalon'});
        this.selectedTab = 1;
      } 
      this.disabled = true; 
    }


   deleteJalon(jalon){
    let dialogRef = this.dialog.open(EnsJalonDeleteComponent, {
      width: '400px',
      data: jalon.idJ
    });
    dialogRef.afterClosed().subscribe(result => {
          
          console.log(result)
          if(result){
            console.log('supp')
            this.getJalons(); 
            this.getProjets()
          }else{
            console.log('nop')
          }
    });

  } 


}
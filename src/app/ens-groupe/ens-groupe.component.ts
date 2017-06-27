import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MdSnackBar,MdDialog} from '@angular/material';
import {Http, Headers} from '@angular/http';
import { EnsGroupeDeleteComponent } from '../ens-groupe/ens-groupe-delete/ens-groupe-delete.component';

@Component({
  selector: 'app-ens-groupe',
  templateUrl: './ens-groupe.component.html',
  styleUrls: ['./ens-groupe.component.css']
})
export class EnsGroupeComponent implements OnInit {

 constructor(
    private http: Http,
    public dialog: MdDialog) { }


  selectedTab = 0;
  groupeSelected = null;

  listGroupes  = [];
  listProjets  = [];
  listEtudiants  = [];

  disabled = false;

 


  tabs = [
          { title: 'Liste Groupes', type: "list"}
        ]



  ngOnInit() {
    this.getGroupes();
    this.getProjets();
    
  }


  callbacksFunctions =  { 
    cancel : this.cancel.bind(this)
  }

  cancel(res){
    if(res){
      this.getGroupes();
    }
    this.tabs.splice(1, 1,);
    this.disabled = false
  }



  getGroupes(){
    let headers = new Headers();
    this.http.get('http://localhost:3000/groupe').map(res => res.json()).subscribe(data =>{
      console.log(data);
      this.listGroupes = data;

    })
  }


  getProjets(){
    let headers = new Headers();
    this.http.get('http://localhost:3000/projet').map(res => res.json()).subscribe(data =>{
      console.log(data);
      this.listProjets = data;

    })
  }


  getGroupeDetail(groupe){
    let headers = new Headers();
    this.http.get('http://localhost:3000/groupe/detail/'+groupe.idG).map(res => res.json()).subscribe(data =>{
      console.log(data);
      this.listEtudiants = data;
      console.log(this.listEtudiants)
    })
  }

  addGroupe(){
    if(!(this.tabs.length > 1) ){
      this.tabs.push({ title: 'Creation Groupe', type: 'creationGroupe'});
      this.selectedTab = 1;
      this.disabled = true;
    }   
     
  }


  detailGroupe(groupe){
      if(!(this.tabs.length > 1) ){
        this.getGroupeDetail(groupe);
        console.log('in')
        this.groupeSelected = groupe
        this.tabs.push({ title: 'Detail groupe', type: 'detailGroupe'});
        this.selectedTab = 1;
        this.disabled = true;
      } 
  }

 


  deleteGroupe(groupe){
    console.log(groupe)
    let dialogRef = this.dialog.open(EnsGroupeDeleteComponent, {
      width: '400px',
      data: groupe.idG
    });
    dialogRef.afterClosed().subscribe(result => {
          
          console.log(result)
          if(result){
            console.log('supp')
            this.getGroupes();
            this.getProjets();
          }else{
            console.log('nop')
          }
    });

  } 

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Http, Headers} from '@angular/http'
import {MdSnackBar,MdDialog} from '@angular/material';
import{EnsProjetDeleteComponent} from '../ens-projet/ens-projet-delete/ens-projet-delete.component' ;

@Component({
  selector: 'app-ens-projet',
  templateUrl: './ens-projet.component.html',
  styleUrls: ['./ens-projet.component.css']
})
export class EnsProjetComponent implements OnInit {

  constructor(
    private http: Http,
    public dialog: MdDialog) { }

  selectedTab = 0;
  listProjets  = [];
  listJalons  = [];
  projetSelected = null;

  disabled = false;


  tabs = [
          { title: 'Liste Projets', type: "list"}
        ]



  ngOnInit() {
    this.getProjets();
    
  }


  getProjets(){
    let headers = new Headers();
    this.http.get('http://localhost:3000/projet').map(res => res.json()).subscribe(data =>{
      console.log(data);
      this.listProjets = data;

    })
  }

  getOneProjet(projetId){
    console.log(projetId)
    console.log('in get one ')
    let headers = new Headers();
    console.log('just before get')
    this.http.get('http://localhost:3000/projet/'+projetId).map(res => res.json()).subscribe(data =>{
      console.log(data);
      this.projetSelected = data[0];

    })
  }




  getJalonsFromProjet(projetId){
    console.log(projetId)
    let headers2 = new Headers();
    console.log('just before get')
    this.http.get('http://localhost:3000/Jalon-Projet/projet/'+projetId).map(res => res.json()).subscribe(data =>{
      console.log(data);
      this.listJalons = data;

    })
  }

  callbacksFunctions =  { 
    cancel : this.cancel.bind(this),
    editprojet : this.editProjet.bind(this)
    
  }

  cancel(res,from){
    if(res){
      this.getProjets();
    }

    if(this.tabs.length > 2 ){
      if(from && from == 'edit'){
        this.getOneProjet(res);
      }
      this.tabs.splice(2, 1,);
      this.disabled = false;

    }else{
      this.tabs.splice(1, 1,);
      this.disabled = false;
    }
  }


    

  addProjet(){
    if(!(this.tabs.length > 1) ){
      this.tabs.push({ title: 'Creation Projet', type: 'creationProjet'});
      this.selectedTab = 1;
    } 
     this.disabled = true;   
  }

  editProjet(projet){
    console.log('in edit')
    console.log(projet)
    this.projetSelected = projet;
    this.tabs.push({ title: 'Edition Projet', type: 'editionProjet'});
      
       
    if(this.tabs.length > 1){
      this.selectedTab = 2;
    }else{
      this.selectedTab = 1;
    }
     this.disabled = true;
  }

  addJalon(){
    if(!(this.tabs.length > 1) ){
      this.tabs.push({ title: 'Creation Jalon', type: 'creationJalon'});
      this.selectedTab = 1;
    }    
  }

  detailProjet(projet){
    if(!(this.tabs.length > 1) ){
      this.projetSelected = projet
      this.getJalonsFromProjet(projet.idP);
      this.tabs.push({ title: 'Detail Projet', type: 'detailProjet'});
      this.selectedTab = 1;
    } 
     this.disabled = true;
  }

  deleteProjet(projet){
    let dialogRef = this.dialog.open(EnsProjetDeleteComponent, {
      
      width: '400px',
      data: projet.idP
    });
    dialogRef.afterClosed().subscribe(result => {
          //this.dialog = null;
          console.log(result)
          if(result){
            //this.refreshJalons();
            console.log('supp')
            this.getProjets()
          }else{
            console.log('nop')
          }
    });

  }



}

import { Component, OnInit,OnChanges,Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Http, Headers} from '@angular/http';
import {MdSnackBar,MdDialog} from '@angular/material';
import{EnsJalonDetailComponent} from '../../ens-jalons/ens-jalon-detail/ens-jalon-detail.component' ;

@Component({
  selector: 'app-ens-projet-details',
  templateUrl: './ens-projet-details.component.html',
  styleUrls: ['./ens-projet-details.component.css']
})
export class EnsProjetDetailsComponent implements OnInit,OnChanges {

  @Input() callback;
  @Input() jalons;
  @Input() projet;

  constructor(
    private http: Http,
    public snackBar: MdSnackBar,
    public dialog: MdDialog) { }


  ngOnInit() {
    console.log(this.projet);
  }

  ngOnChanges(changes) {
      console.log(changes);
      
      if(this.projet && changes.projet){
        this.projet = changes.projet.currentValue;
      }
      
  }

  detailJalon(jalon){
    let dialogRef = this.dialog.open(EnsJalonDetailComponent, {
      
      width: '600px',
      data: jalon
    });
    dialogRef.afterClosed().subscribe(result => {
          //this.dialog = null;
          console.log(result)
          if(result){
            this.refreshJalons();
          }
    });
  }
  





  refreshJalons(){
    console.log('in refresh')
    let projetId = this.projet.idP;
    let headers2 = new Headers();
    this.http.get('http://localhost:3000/Jalon-Projet/projet/'+projetId).map(res => res.json()).subscribe(data =>{
      console.log(data);
      this.jalons = data;

    })
  }


}

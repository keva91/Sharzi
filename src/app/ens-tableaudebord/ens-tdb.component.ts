import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Http, Headers} from '@angular/http';
import {MdSnackBar,MdDialog} from '@angular/material';
import{EnsJalonDetailComponent} from '../ens-jalons/ens-jalon-detail/ens-jalon-detail.component' ;

@Component({
  selector: 'app-tdb',
  templateUrl: './ens-tdb.component.html',
  styleUrls: ['./ens-tdb.component.css']
})
export class TdbComponent implements OnInit {

  loading = false;
  mydata;

  constructor(
    private router: Router,
    private http: Http,
    public dialog: MdDialog
  ){
  }

  ngOnInit() {
    return this.testsuivi();
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
            //this.refreshJalons();
          }
    });
  }

  testsuivi(){
    this.loading = true;
       let headers = new Headers();
       this.http.get('http://localhost:3000/tdb').map(res => res.json()).subscribe(data =>{
         //console.log(data)
         this.mydata = data;
         console.log(this.mydata)
         return this.mydata;
       })
   
  }

}

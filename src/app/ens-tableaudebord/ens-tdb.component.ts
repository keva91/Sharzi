import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Http, Headers} from '@angular/http'

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
    private http: Http
  ){
  }

  ngOnInit() {
    return this.testsuivi();
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

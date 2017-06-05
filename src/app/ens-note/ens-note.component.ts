import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Http, Headers} from '@angular/http'

@Component({
  selector: 'app-ens-note',
  templateUrl: './ens-note.component.html',
  styleUrls: ['./ens-note.component.css']
})
export class EnsNoteComponent implements OnInit {


  loading = false;
  mydata;

  constructor(
    private router: Router,
    private http: Http
  ){
  }

  ngOnInit() {
    return this.testnote();
  }

   testnote(){
    
    let headers = new Headers();
    // return this.http.get('http://localhost:3000/note').subscribe(function(response){
    //   console.log(response.json())
    //   return this.mydata = response.json()[0].jalonProjet
    //   //console.log(this.mydata)

    this.http.get('http://localhost:3000/note')
      .map(res => res.json())
      .subscribe(data =>{
        console.log(data)
        //  return this.mydata = data[0].jalonProjet;
        return this.mydata = data[0][0].idProjet;
     })
  }
}

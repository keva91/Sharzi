import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Http, Headers} from '@angular/http'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loading = false;

  mydata;

  constructor(
    private router: Router,
    private http: Http
  ){
  }



  ngOnInit() {
  }



  test(){
    this.loading = true;
    setTimeout(() => {
      console.log("yo timeout")
       //this.router.navigate(['/home']);
       let headers = new Headers();
       this.http.get('http://localhost:3000/etudiant').map(res => res.json()).subscribe(data =>{
         console.log(data)
         this.mydata = data[0].nom;
       })
    }, 2000);
   
  }

}

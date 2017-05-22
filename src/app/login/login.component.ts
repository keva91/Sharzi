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
       this.router.navigate(['/home']);
       let headers = new Headers();
       this.http.get('http://localhost:3000/').map(res => res.json()).subscribe(data =>{
         console.log(data)
       })
    }, 2000);
   
  }

}

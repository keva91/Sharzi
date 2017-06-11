import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Http, Headers} from '@angular/http'
import { FormBuilder, Validators } from '@angular/forms';

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
    private http: Http,
    public fbLogin: FormBuilder
  ){
  }

  public loginForm = this.fbLogin.group({
    pseudo: ["", Validators.required],
    pwd: ["", Validators.required],
  });



  ngOnInit() {
  }



  test(){

    var identifiants = { pseudo : this.loginForm.value.pseudo, pwd : this.loginForm.value.pwd}
    this.loading = true;
    setTimeout(() => {
      console.log("yo timeout")
       //this.router.navigate(['/home']);
       let headers = new Headers();
       this.http.post('http://localhost:3000/login',identifiants).map(res => res.json()).subscribe(data =>{
         console.log(data)
         this.mydata = data[0].nom;
       })
    }, 2000);
   
  }

}

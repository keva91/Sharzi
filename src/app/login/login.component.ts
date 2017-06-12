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
       let headers = new Headers();
       this.http.post('http://localhost:3000/login',identifiants).map(res => res.json()).subscribe(data =>{
         console.log(data)
         if(data.length){
           if(data[0].idEtu){
              console.log('etudiant conecté')
              this.router.navigate(['/homeEtudiant']);
           }else{
             console.log('ensei conecté')
             this.router.navigate(['/homeEnseignant']);
           }
         }else{
           console.log('mauvais identifiants')
         }
       })
    }, 2000);
   
  }

}

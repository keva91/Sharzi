import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Http, Headers} from '@angular/http';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-ens-projet-details',
  templateUrl: './ens-projet-details.component.html',
  styleUrls: ['./ens-projet-details.component.css']
})
export class EnsProjetDetailsComponent implements OnInit {

  @Input() callback;
  @Input() jalons;
  @Input() projet;

  constructor(
    private http: Http,
    public snackBar: MdSnackBar) { }

  selectedTab = 0;

  


  ngOnInit() {
   
     
  }



}

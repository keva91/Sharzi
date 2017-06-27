import { Component, OnInit,Inject,Input } from '@angular/core';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import {MD_DIALOG_DATA} from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import {Http, Headers} from '@angular/http';
import {MdSnackBar} from '@angular/material';


@Component({
  selector: 'app-ens-jalon-view',
  templateUrl: './ens-jalon-view.component.html'
  
})
export class EnsJalonViewComponent implements OnInit{

  @Input() callback;
  @Input() jalon;

  constructor(
    public fbJ: FormBuilder,
    private http: Http,
    public snackBar: MdSnackBar) { 
  }


  
     


  ngOnInit() {
    console.log(this.jalon)
    
  }

}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { routing } from './app.router';
import { Md2Module }  from 'md2';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSemanticModule } from 'ng-semantic/ng-semantic';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/homeEnseignant.component';
import { LoginComponent } from './login/login.component';
import { EnsProjetComponent } from './ens-projet/ens-projet.component';
import { EnsGroupeComponent } from './ens-groupe/ens-groupe.component';
import { EnsNoteComponent } from './ens-note/ens-note.component';
import { EnsJalonsComponent } from './ens-jalons/ens-jalons.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EnsProjetComponent,
    EnsGroupeComponent,
    EnsNoteComponent,
    EnsJalonsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,MaterialModule,FlexLayoutModule,
    routing,BrowserAnimationsModule,Md2Module.forRoot(),NgSemanticModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

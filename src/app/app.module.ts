import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgSemanticModule } from 'ng-semantic/ng-semantic';
import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { routing } from './app.router';
import { Md2Module }  from 'md2';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeEnseignantComponent } from './home-enseignant/homeEnseignant.component';
import { LoginComponent } from './login/login.component';
import { EnsProjetComponent } from './ens-projet/ens-projet.component';
import { EnsProjetCreateComponent } from './ens-projet/ens-projet-create/ens-projet-create.component';
import { EnsGroupeComponent } from './ens-groupe/ens-groupe.component';
import { EnsNoteComponent } from './ens-note/ens-note.component';
import { EnsJalonsComponent } from './ens-jalons/ens-jalons.component';
import { EnsJalonsCreateComponent } from './ens-jalons/ens-jalons-create/ens-jalons-create.component';
import { HomeEtudiantComponent } from './home-etudiant/home-etudiant.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeEnseignantComponent,
    LoginComponent,
    EnsProjetComponent,
    EnsGroupeComponent,
    EnsNoteComponent,
    EnsJalonsComponent,
    EnsJalonsCreateComponent,
    HomeEtudiantComponent,
    EnsProjetCreateComponent
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

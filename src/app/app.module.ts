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
import { MdDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeEnseignantComponent } from './home-enseignant/homeEnseignant.component';
import { LoginComponent } from './login/login.component';
import { EnsProjetComponent } from './ens-projet/ens-projet.component';
import { EnsProjetCreateComponent } from './ens-projet/ens-projet-create/ens-projet-create.component';
import { EnsProjetDetailsComponent } from './ens-projet/ens-projet-details/ens-projet-details.component';
import { EnsGroupeComponent } from './ens-groupe/ens-groupe.component';
import { EnsNoteComponent } from './ens-note/ens-note.component';
import { EnsJalonsComponent } from './ens-jalons/ens-jalons.component';
import { EnsJalonCreateComponent } from './ens-jalons/ens-jalon-create/ens-jalon-create.component';
import { EnsJalonDetailComponent } from './ens-jalons/ens-jalon-detail/ens-jalon-detail.component';
import { HomeEtudiantComponent } from './home-etudiant/home-etudiant.component';
import { TdbComponent } from  './ens-tableaudebord/ens-tdb.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeEnseignantComponent,
    LoginComponent,
    EnsProjetComponent,
    EnsGroupeComponent,
    EnsNoteComponent,
    EnsJalonsComponent,
    EnsJalonCreateComponent,
    HomeEtudiantComponent,
    TdbComponent,
    EnsProjetCreateComponent,
    EnsProjetDetailsComponent,
    EnsJalonDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,MaterialModule,FlexLayoutModule,
    routing,BrowserAnimationsModule,Md2Module.forRoot(),NgSemanticModule,
    ReactiveFormsModule,
    MdDialogModule 
  ],
  entryComponents: [EnsJalonDetailComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

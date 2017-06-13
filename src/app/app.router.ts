import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeEnseignantComponent} from './home-enseignant/homeEnseignant.component';
import {HomeEtudiantComponent} from './home-etudiant/home-etudiant.component';
import {LoginComponent} from './login/login.component'
import {EnsProjetComponent} from './ens-projet/ens-projet.component'
import {EnsGroupeComponent} from './ens-groupe/ens-groupe.component'
import {EnsNoteComponent} from './ens-note/ens-note.component'
import {EnsJalonsComponent} from './ens-jalons/ens-jalons.component'

import { AppComponent } from './app.component';

export const router: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'homeEnseignant', component: HomeEnseignantComponent,
        children: [
      { path: '',redirectTo: 'projets', pathMatch: 'full' },
      { path: 'projets', component: EnsProjetComponent },
      { path: 'groupes', component: EnsGroupeComponent },
      { path: 'notes', component: EnsNoteComponent },
      { path: 'jalons', component: EnsJalonsComponent }
    ]},
    { path: 'homeEtudiant', component: HomeEtudiantComponent}
   
   
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(router);
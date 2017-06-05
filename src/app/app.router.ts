import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/homeEnseignant.component';
import {LoginComponent} from './login/login.component'
import {EnsProjetComponent} from './ens-projet/ens-projet.component'
import {EnsGroupeComponent} from './ens-groupe/ens-groupe.component'
import {EnsNoteComponent} from './ens-note/ens-note.component'

import { AppComponent } from './app.component';

export const router: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'home', component: HomeComponent,
        children: [
      { path: '',redirectTo: 'projet', pathMatch: 'full' },
      { path: 'projet', component: EnsProjetComponent },
      { path: 'groupe', component: EnsGroupeComponent },
      { path: 'note', component: EnsNoteComponent }
    ]},
   
   
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(router);
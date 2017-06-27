# Sharzi

Application Sharzi réalisée par Valbon kevin, De Martino Nicolas et Garapati Vivek.

Application développé à l'aide du framework Angular2 développée par Google, et s'appuie sur un environnement NodeJS pour le Back.

Cette application permet de faire de la gestion de projet pour les enseignants.

## Installation :

Cloner ce repository sur votre poste.

Installer les dépendances NodeJS en lançant la commande npm install dans le projet.

## Lancer le projet:

Pour le client Angular 2, aller à la racine du projet et lancer 'ng serve' 

Pour le Back NodeJS, aller à la racine puis src/back/ et lancer node server.js

La base de données se trouve à la racine du projet et se nomme bdd3.sql



Si probleme ng-semantic module : 

ajouter ce code au fichier ng-semantic.d.ts qui se trouve dans le package node ng-semantic :

```javascript
import { NgModule } from '@angular/core';


@NgModule({
	declarations: [
		NgSemanticModule
	]
})
export declare class NgSemanticModule {
}
```
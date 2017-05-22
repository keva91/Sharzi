import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './homeEnseignant.component.html',
  styleUrls: ['./homeEnseignant.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  selectedTab = 0;


  tabs = [
          { title: 'Liste', content: "Liste des projets"}
        ]

  test = function(){
    console.log("test")
  }

  ngOnInit() {
    
  }

  

  addTab(){
    
    if(!(this.tabs.length > 1) ){
      this.tabs.push({ title: 'creation', content: 'Creation projet'});
      this.selectedTab = 1;
    }
    

  }



}

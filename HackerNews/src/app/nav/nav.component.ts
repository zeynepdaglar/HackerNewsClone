import { Component, OnInit } from '@angular/core';
import { Model } from "../model";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  model = new Model();
  ngOnInit(): void {
  }

  getNav(){
    return this.model.menu;
  }

  getHide(){
    this.model.hide = true;
    console.log("hide: ",this.model.hide);
    return this.model.hide;
  } 
}

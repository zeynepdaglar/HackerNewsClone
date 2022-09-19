import { Component, OnInit } from '@angular/core';
import { Model } from "../model";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent{

  constructor() { }
  
  model = new Model();
  
  getItems(){
    return this.model.items;
  }
}

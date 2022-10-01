import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  @Output() submitOpenEvent = new EventEmitter<boolean>();

  submitOpen(value: boolean){
    this.submitOpenEvent.emit(value);
  }
}

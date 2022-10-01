import { Component } from '@angular/core';
import { Model } from './model';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HackerNews';
  isSubmitOpen= false;
  constructor() {
  }

  onSubmitOpen(isOpen: boolean){
    this.isSubmitOpen = isOpen;
  }
}

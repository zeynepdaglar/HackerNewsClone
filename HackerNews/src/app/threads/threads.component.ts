import { Component, OnInit } from '@angular/core';
import { Model } from '../model';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {

  threadsMenu: string[];

  constructor() { 
    this.threadsMenu = ["Guidelines", "FAQ", "Lists", "Security", "Legal", "Apply to YC", "Contact"];
  }
  ngOnInit(): void {
  }
}

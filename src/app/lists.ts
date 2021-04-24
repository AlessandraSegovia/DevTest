import { Component, OnInit } from '@angular/core';
import { Item } from './item';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class ListItems implements OnInit {
  item1: Item = {
    id: 1,
    description: 'This is an item of my Trello task list',
    childs:'none'
  };
  item2: Item = {
    id: 2,
    description: 'This is an item of my Trello task list',
    childs:'item3'
  };
  item3: Item = {
    id: 3,
    description: 'This is an item of my Trello task list',
    childs:'none'
  };

  constructor() { }

  ngOnInit() {
  }

}
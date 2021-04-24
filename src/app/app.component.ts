import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'devtest-project';
  item='item-list1';
}


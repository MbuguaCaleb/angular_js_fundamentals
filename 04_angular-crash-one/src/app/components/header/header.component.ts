import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';

  /**When i want to declare properties of the classs */
  constructor() {}

  /**When i want to run something when the componenr loads */
  /*Example is when i make http requests*/
  ngOnInit(): void {}

  toggleAddTask() {
    console.log('clicked');
  }
}

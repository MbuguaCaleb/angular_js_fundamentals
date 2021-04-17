import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Injecting the router so as to allow redirection
  constructor(private router:Router){}

  ngOnInit() {
  }

  onLoadServers(){
    //redirecting to a route
    this.router.navigate(['/servers']);

  }
}

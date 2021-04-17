import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  //Activated Route is a Javascript Object with very useful properties
  //Activated Route is very helpful in fetching the route parameters
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.user={
      id: this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name']
    }
  }

}

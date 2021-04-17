import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnDestroy {
  user: {id: number, name: string};
  paramsSubscription:Subscription;

  //Activated Route is a Javascript Object with very useful properties
  //Activated Route is very helpful in fetching the route parameters
  constructor(private route:ActivatedRoute) { }

  //snapshot only reacts to the first instance of the loaded component.
  //however for subsequent requests it will change the route and not the data
  //we have to use observable for the subsequent routes which then now will
  //load the data asynchronously
  //this component data is as well updated and not only the route

  ngOnInit() {
    this.user={
      id: this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name']
    };

    //Observable will listen to whereever there is a change in my Route
    this.paramsSubscription= this.route.params.subscribe(
      (params:Params)=>{
        this.user.id=params['id'];
        this.user.name=params['name'];
      })
  }

  //Its good to destroy Observables so as not to Maintain their state
 ngOnDestroy(){
   this.paramsSubscription.unsubscribe();
 }
}

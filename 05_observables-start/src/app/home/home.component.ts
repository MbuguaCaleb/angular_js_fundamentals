import { Component, OnDestroy, OnInit } from "@angular/core";

import { interval, Subscription, Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  //to Unsubsribe from a custom Observable we should store it in a Subscription
  private firstObservableSubscription: Subscription;

  constructor() {}
  ngOnInit() {
    /*Interval Fires a Number Every Second*/
    /*
    this.firstObservableSubscription = interval(1000).subscribe((count) => {
      console.log(count);
    });
    */
    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);
    });

    this.firstObservableSubscription = customIntervalObservable.subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  //Unsubscribing from the Observable to Prevent Memory Leaks
  ngOnDestroy() {
    this.firstObservableSubscription.unsubscribe();
  }
}

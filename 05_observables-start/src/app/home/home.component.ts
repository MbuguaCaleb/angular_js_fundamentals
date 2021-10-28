import { Component, OnDestroy, OnInit } from "@angular/core";

import { interval, Subscription, Observable } from "rxjs";
import { map, filter } from "rxjs/operators";

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
        if (count === 5) {
          observer.complete();
        }

        //simulating an error
        if (count > 3) {
          observer.error(new Error("Count is greater 3!"));
        }
        count++;
      }, 1000);
    });

    //Operators
    //mao gets the current data being emmitted by the Observable
    // customIntervalObservable.pipe(
    //   filter((data) => {
    //     return data > 0;
    //   }),
    //   map((data: number) => {
    //     return "Round" + (data + 1);
    //   })
    // );

    //I have my Pipe  Called Just before my Observable
    //Once fliter returnss true, Map will be executed, then Subsribe will follow
    this.firstObservableSubscription = customIntervalObservable
      .pipe(
        filter((data) => {
          return data > 0;
        }),
        map((data: number) => {
          return "Round" + (data + 1);
        })
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
          alert(error.message);
        },
        () => {
          console.log("Compeleted");
        }
      );
  }

  //Unsubscribing from the Observable to Prevent Memory Leaks
  ngOnDestroy() {
    this.firstObservableSubscription.unsubscribe();
  }
}

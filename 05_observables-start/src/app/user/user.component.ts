import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) {}

  //params is an Observable to which we Subscribe
  //Observables are constructs in which we Subscribe so as to be informed about changes in data
  //Observables are that Stream of data and whenever a new Stream is emitted our Subscription will know about it
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }
}

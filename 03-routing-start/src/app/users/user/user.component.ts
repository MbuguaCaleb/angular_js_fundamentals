import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  user: { id: number; name: string };

  //where i initialize or instanticate my values
  constructor(private route: ActivatedRoute) {}

  //lifecycle method which is executed when the component  loads
  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params["id"],
      name: this.route.snapshot.params["name"],
    };
    //reacting to subsequent changes
    //An observable is an easy way to subscribe to an event that may happen in the future then execute
    //it when it happens without having to wait for it now

    this.route.params.subscribe((params: Params) => {
      this.user.id = params["id"];
      this.user.name = params["name"];
    });
  }
}

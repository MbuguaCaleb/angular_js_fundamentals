import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("form") signUpForm: NgForm;

  subscriptions = ["Basic", "Advanced", "Pro"];

  submitted: boolean = false;

  userData = {
    email: "",
    subscription: "",
    password: "",
  };

  defaultSubsription: string = "Advanced";

  defaultSubscription = "";
  onSubmit() {
    console.log(this.signUpForm.value);

    this.submitted = true;
    this.userData.email = this.signUpForm.value.email;
    this.userData.subscription = this.signUpForm.value.subscription;
    this.userData.password = this.signUpForm.value.password;

    //reset form after submit
    this.signUpForm.reset();
  }
}

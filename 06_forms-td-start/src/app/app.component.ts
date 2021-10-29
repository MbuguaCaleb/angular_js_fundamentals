import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  //view child is used to grab my local references
  @ViewChild("f") signUpForm: NgForm;

  suggestUserName() {
    const suggestedName = "Superuser";
  }

  //Method for submitting my form
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signUpForm);
  }
}

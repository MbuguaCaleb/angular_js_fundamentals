import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  genders = ["male", "female"];

  //creating a proprty that will hold our Form
  signUpForm: FormGroup;
  //I Should initialize my form before rendering the Template
  //So that when my template is rendered they are in sync with the Form
  ngOnInit() {
    this.signUpForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl("male"),
    });
  }

  onSubmit() {
    console.log(this.signUpForm);
  }
}

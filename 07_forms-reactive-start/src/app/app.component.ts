import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  genders = ["male", "female"];

  //creating a proprty that will hold our Form
  signUpForm: FormGroup;

  ngOnInit() {
    //control are Key Value pairs in the Object we pass to the Form Group
    this.signUpForm = new FormGroup({
      username: new FormControl(null),
      email: new FormControl(null),
      gender: new FormControl("male"),
    });
  }
}

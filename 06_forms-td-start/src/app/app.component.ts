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
  defaultQuestion = "pet";
  answer = "";
  genders = ["Male", "Female"];
  submitted = false;

  user = {
    username: "",
    email: "",
    secretQuestions: "",
    answer: "",
    gender: "",
  };

  suggestUserName() {
    const suggestedName = "Superuser";
    //i can be able to set the values by simpulationg a copy of my Object via setValue

    // this.signUpForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: "",
    //   },
    //   secret: this.defaultQuestion,
    //   questionAnswer: "",
    //   gender: "Male",
    // });

    //Best approach
    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  //Method for submitting my form
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    //submitting Data from a form
    this.submitted = true;
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.secretQuestions = this.signUpForm.value.secret;
    this.user.answer = this.signUpForm.value.questionAnswer;
    this.user.gender = this.signUpForm.value.gender;

    //Restting the form
    //important after submission to reset the form State in preparation for the Next Input
    this.signUpForm.reset();
  }

  //   secret: this.defaultQuestion,
  //   questionAnswer: "",
  //   gender: "Male",
}

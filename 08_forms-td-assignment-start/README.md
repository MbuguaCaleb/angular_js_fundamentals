**Notes**

```
For properties i would assign directly via HTML, i use property binding
while using angular.

<option *ngFor="let subscription of subscriptions" [value]="subscription">{{subscription}}</option>

A cannot use a combination of tow data binding methods.

if i go for string interpolation i would do the above as follows

<option *ngFor="let subscription of subscriptions" value="{{subscription}}">{{subscription}}</option>

Value above

<button type="submit" class="btn btn-primary" [disabled]="!form.valid">Submit</button>

Disabled above

```

```
Remember Data Binding in Angular

https://sanjaygarg-46167.medium.com/what-is-data-binding-in-angular-9a1158de779d

Rember [ngModel] ="defaultValue"

Is One way binding

#email=ngModel is a local refernce.


To get the Value of the Form form Element Reference

console.log(this.signUpForm.value);


To get Values of Form Properties is Just like in Normal Javascript

```

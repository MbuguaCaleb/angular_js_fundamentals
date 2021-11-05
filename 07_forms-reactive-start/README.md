**Template Driven**

```
Angular infres the form Object from the DOM.

```

**Reactive**

```
Form is Created programatically (In Typecript Code)

I model and create my form my self rather than angular infering on My Behalf

SignUpForm is of the type FormGroup.

controls are passed as Key Value pairs

this.signUpForm = new FormGroup({
    username: new FormControl(null),
    email: new FormControl(null),
    gender: new FormControl("male"),
});

FormGroup and FormControl are Made availabe by the Reactive Package Module

Form Control takes in a Number of Arguments.

(a)Initial Value of Control

(b)Single Validator or an Array of Validators we May want to Pass into this Control.

(c)Any Potential Asynchronous Validators.


```

**Linking Our Form Template to TS**

```
We tell Angular to take in Our form via Propery binding.

We use a directive coming from reactive forms known as [formGroup] and we pass
the form propery we Created.

N/B i MUST have imported reactive froms for form group to work..

<input type="text" id="email" class="form-control" formControlName="email">

If i am using Property Binding and passing a String i can remove the [squaredBrackets]
and pass the string directly as Above.

If i want to maintain Squared brackets we should wrap the string in Quotes

<input type="text" id="email" class="form-control" [formControlName]="email">

Whenever i am passing data into a Component i pass it via Porperty Binding.

```

**SUBMITTING FORM**

```
We use (ngSubmit) since we need to React to the Form Submit.

The diffrence is that we do not get our value by our element reference
but   by the form we created and have linked with our template
```

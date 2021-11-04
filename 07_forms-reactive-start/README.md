**Template Driven**

```
Angular infres the form Object from the DOM.

```

**Reactive**

```
Form is Created programatically and Synchronized with the Dom.

Using the programmattic approach i create my from from TypeScript
Code

I model and create my form my self rather than angular infering on My Behalf

SignUpForm is of the type FormGroup.

controls are Key Value pairs in the Object we pass to the FormGroup

They are also classes i.e the Controls.

this.signUpForm = new FormGroup({
    username: new FormControl(null),
    email: new FormControl(null),
    gender: new FormControl("male"),
});

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


```

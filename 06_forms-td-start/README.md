**Learning Angular Forms**

```
Angular helps us in managing our forms eg

(a)Checking what the User Entered.


(b)Checking whether the form is Valid

Angular helps us by giving to my Ts file a Javascript represenatation of
my form making it easy to retrieve User values and to see the state of the
form.

With the JSON Representation i can be able to do Validations, ect

```

**Template Driven vs Reactive Approach**

```
Angular gives us two approaches when it comes to handling forms

(a)Template Driven

Angular infers the form Object from the DOM.


(b)Reactive Approach

The form is created programatically and synschronized with the DOM.

You define the form in the Ts file but also declare it in your template.

```

**How Angular Works**

```

Important.

In angular my form do not have a POST Method or an action attribute..

We do not want a Http request be sent by clicking the form Submit .

We want angular to do this for us...

We want angular to create a JSON Object representation of the form.


Steps to get JSON

(Configuring Our forms and adding some Controls)

(a)We must make sure the forms Module has been imported.

import { FormsModule } from '@angular/forms';

Make sure it is under imports

With this imports made in your angular application, angular will automatically
generate for you a JSON Object from any of your forms.

So that angular does not submit everything in the form, it gives us ability
to choose what we want to be partof Object.

We have to tell it via ngModel which is a directive that comes via the formsModule.

The next thing is to tell angular which controls we want our form to have.

Example

<input type="text" id="username" class="form-control" name="username" ngModel>

Explanation,

The name is important because it is what gives me my Key.
ngModel is important because it is what gives me my value.


```

**Submitting Our forms**

```
We use the (ngSubmit) directive which prevents the default form behavoiur.

It only gives us on event we can listen to unlike in normal HTML where
much more happends eg making request to server...reloading the page etc...

Since we are using template driven approach, to access the form and therfore data
after submit we use a local reference that points to that from.

  <form (ngSubmit)="onSubmit(f)" #f>
        <div id="user-data">
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" class="form-control" name="username" ngModel>
          </div>

    <button class="btn btn-primary" type="submit">Submit</button>

   </form>

The element refrence #f passed to the onsubmit does not give me a Javascript Object by default.

To get a Javascript Object by default i should pass #f="ngForm"

  <form (ngSubmit)="onSubmit(f)" #f="ngForm">
        <div id="user-data">
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" class="form-control" name="username" ngModel>
          </div>

    <button class="btn btn-primary" type="submit">Submit</button>

   </form>

```

**Form State**

```

There are a lot of important attributes in the form State.

These are very helpful and include the dirty, enabled,
invalid, touched, untouched ,validator.

They are very important properties just like in raw Javascript.

```

**View Child as an alternative**

```
Remember @ViewChild is a way of grabbing my local reference.

I can grab my whole form via the @ViewChild

@ViewChild("f") signUpForm: NgForm;

```

**Validation**

```
There are built in and much more powerful directives in Angular templates when using TDD Approach

<input type="email" id="email" class="form-control" name="email" ngModel required email>

Depending on whether an input is valid or not, My Valid propery in form state is affected.

This happens both in the form level and in the controls level.

If i inspect my inputs i can also be able to see whether the valid or isInvalid class has been
applied.

Angular tracks the state of the form and the validity

We can therefore style the inputs conditionally

It is very important to know that there are some classes added on my input
such as ng-invalid depending on whether my input is valid
or not .

Example
class="form-control ng-dirty ng-valid ng-touched"

Remember the work of angular or any other tecnology such as docker is to help you.

(They are not difficult!)


When styling these css classes i must be explicit...


remember if one of the form inputs is invalid, the form propery for valid
will also be invalid.


N/B
Form state is very important

Attaching ngModel directive to element ref #email...all the properties of that control will be tagged
to the element ref...

<input type="email" id="email" class="form-control" name="email" ngModel required email #email="ngModel">

(We can therefore add validations much more dynamically for particular controls)


```

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

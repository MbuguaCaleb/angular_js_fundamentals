##Task Tracker Application in Angular

```
Angular JS-Was the Initial Release of Angular

But angular 2-11(Angular was completely rewitten)


Advantages

(a)Create dynamic front end apps and UIs

(b)Full featured framework(router,http etc)

(c)Integrated Typescript(Though this is optional,
it is a huge advantage when it comes to angular)

(d)Rx Js-Efficient,Asynchronous programming.

(e)Angular is test friendly.

(f)Popular in enterprise businesses..Used for much larger
applications since it is more standardized.

```

**Angular Components**

```
Made up of the

(a)template-HTML File

(b)Logic-Typescript file

(c)Styling

components are reusable and can be embedded as an XML-like tag


```

**Angular Services**

```
(a)Angular distinguishes components from services to increase
modularity and reusablitity...

It makes a component very clean.

A component can delegate certain tasks to services such as fetching
data from the server,validating user input or logging directly to the
console.



```

**Angular CLI**

```
Standard tooling for Angular Development

It is a commandline interface for creating angular apps

From it we get to commands to  generate components,services,etc.

```

**Short NOTES**

```
(a)Any component in angular JS Must be in the declarations in the
app.module.ts

When i use cli..its automaticaly imported

(b)I can apply javascript methods within my interpolations

<h1>{{ title.toUpperCase() }}</h1>
{{ 1 + 5 }}

(c)an autogeneared angular component contains 4 files(Testfile, app.component.ts,app.component.html
and app.component.ts)

(d)A component is always prefixed by <app-component-name> when declaring it in another template
   All the components i have must be declared in the app module ts

   It is like  where i bring them into the main app


```

**SECRETS**

```
(a)Shortcut to generate components

ng generate component components/task-item
ng generate component components/add-task

npm install -g @angular/cli

(b)Angular font awesome

ng add @fortawesome/angular-fontawesome
https://github.com/FortAwesome/angular-fontawesome

Now this external module will be added to app.modules..imports

(c)Services

They are like a centatilised state

(d)Observables

They help me in dealing with asynhronous data

import { Observable, of } from 'rxjs';

of is used when i am returning an Observable incase the module
i am using does not have this inbuld


A module like Http Client has this in built

(e)Angular HTTP Client

It returns an Observable automatically

(f)Two way Data Binding

Two-way data binding refers to sharing data between a component class and its template. If you change data in one place, it will automatically reflate at the other end. For example, if you change the value of the input box, then it will also update the value of the attached property in a component class.

Its a comnibation of attribute and event binding

```

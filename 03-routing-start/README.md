**Routing**

```
I load  different components differently like i would
do a new page via routing

In Angular JS angular routing is special because i do not mount a new
page but instead dload a different component

```

**Including Routes**

```
(a)I import the routes from the angularouter

    import { Routes } from "@angular/router";

(b)I create an array with the type of routes where i store my
   Routes

   const appRoutes: Routes = [
  { path: "users", component: UsersComponent }, //localhost:4200/users
   ];

(c)My array of routes has a very specific structure,

(i)path----N/B do not put a slash on the given path

(ii)component

(d)I then must register my appRoutes array under imports so that they are
   recognized within my application

imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],

(e)on app.component html encaplulate everything under the <router-outlet></router-outlet>
   which will take charge if rendering the components.

it marks the place where you want the router to load the component of the currently selected
route.


```

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

(e)on app.component html encaplulate everything under the

<router-outlet></router-outlet>
which will take charge if rendering the components.

it marks the place where you want the router to load the component of the currently selected
route.

The router outlet is a directive but it has a tag.


```

**Navigating with router links**

```
You should not implement naviation by adding links directly
as in purehtml,

This triggers a reload with is the default behaviour

**Wrong Way**
<li role="presentation"><a href="/servers">Servers</a></li>

We use what we call a routerLink Directive,

<li role="presentation" class="active"><a routerLink="/">Home</a></li>
<li role="presentation"><a routerLink="/servers">Servers</a></li>
<li role="presentation"><a [routerLink]="['/users']" >Users</a></li>

Method 3 is more recommended.

It gives us more control and constuct more complex paths more easily.

routerLink listens to a click, prevents the default  which is to reload
the page then loads the selected component,


```

**Relative Vs Absolute Paths**

```
(a)Relative path

<li role="presentation"><a routerLink="servers">Servers</a></li>

It checks the current URL you are on then appends the path.

(b)Absolute path

It will go to the appended URL regardless of where you are on the
component tree
<li role="presentation"><a routerLink="/servers">Servers</a></li>


```

**Styling Active Paths**

```

I use the routerLinkActive="classname"

It takes a classname i want to appear when the route is active,

The empty path segment is always part of all the paths(FrontEnd Frameworks)


//Angular JS Secret

Whenever i am passing something that is more than a string in angular Js,
i must use property binding .

Example

[routerLinkActiveOptions]="{exact:true}"
 [routerLink]="['users']"
If its just a string or will result to a string i can pass it as an attribute

Example
routerLinkActive="active"


```

**Naviagating to routes progmatically via your typescript**

```
A good example of this is after a http Post request
and i want to redirect to a route,

i inject the router module from angular router into
my contructor  the use one of its methods,

constructor(private router: Router) {}

  onLoadServers() {
    //http request
    this.router.navigate(["/servers"]);
  }

We can also use relative paths programatically

N/B
unlike the router link the naviage method does not know which route you are currently on

By default navigate directs to the root domain not unless i add the relative To propery

as shown below
this.router.navigate(["servers"], { relativeTo: this.route });


```

**Routes with Parameters**

```
(a)A colon must be included between the route and the parameter,
   this is what makes the route dynamic

 { path: "users/:id", component: UserComponent },

(b)How do we retrieve data from the URL??

  We inject an ActivatedRoute object.

  The ActivatedRoute object will give us access to the ID passed
  in the URL.

  ActivatedRoute is an object that has so many properties which we can
  tap into.

  How we retrieve the id
  id: this.route.snapshot.params["id"],

```

**Loading Route Parameters Reactively**

```
We use an obdervable that listens to the change of the params.
An Observable helps me in handling of asynchronous data

this.route.params.subscribe((params: Params) => {
  this.user.id = params["id"];
  this.user.name = params["name"];
});


This observable will update our component whenever the parameters change

When i am loading my component from outside i do not need to subscribe, snapshot
is enought

However if i am loading from inside i must subscribe because angular will not
rerender the component.


```

**Handling Observables**

```
Once an Observable is executed/subscribed to , it is usually held in memory

A component on the other hand is destroyed when you move from component A to
component B.

It is therefore important to clear the value of the Observable from memory
once you switch away from the component

We use the ngOnDestroy life cycle hook to unsubsribe from an observable.

To unsubsribe from an Observable we need to import subscription from rxjs

import { Subscription } from "rxjs";

N.B

For Observables that come inbuilt with angular Js i do not have to unsubssribe
But for custom Observables, i must Unsubsribe

```

**Passing Query Parameters and Fragments**

```
http://localhost:4200/users/1/caleb?mode=editing#loading

Query Parameters are like when i am passing data via a GET request to a route

(a)addding from router link
  <a
  [routerLink]="['/servers',5,'edit']"
  [queryParams]="{allowEdit:'1'}"
  fragment="loading"
  class="list-group-item"
*ngFor="let server of servers">
{{ server.name }}
  </a>

  i may  add more than one fragment by applying property binding

 (b)

  this.router.navigate(["/servers", id, "edit"], {
    queryParams: { allowEdit: "1" },
    fragment: "loading",
  });


Retreving Parameters

private route: ActivatedRoute) is very important


```

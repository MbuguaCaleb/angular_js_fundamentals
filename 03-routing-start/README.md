**Short Notes**

```
(a)Everything must be wrapped within the <router-outlet>

<router-outlet>

</router-outlet>

(b)We do not navigate manually with slashes because this reloads our page every time

 <a href="/users">Users</a>

 This is the Wrong Way

 The correct way which makes it render as an angular component is routerLink

    <li role="presentation"><a routerLink='/servers'>Servers</a></li>

    //The beloew helps me map more complex routes
    <li role="presentation"><a [routerLink]="['/users']">Users</a></li>

(c)Relative Path Vs Absolute  Path

  (a)Absolute

  <a routerLink="/servers">

  Will always redirect to serverss

  (b)Relative

  <a routerLink="servers">

  will append serves to the current route you currently are on.

(d)We can go back relative paths just like we navigate folders

  will go back two paths to naviage back from the component

  <a routerLink="../servers">
  this means go back two steps below the load path

(e)To avoid nesting of routes when using the router i must use the exact key word in the
the router link active options

  <li role="presentation"  routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}"><a routerLink="/">Home</a></li>

(f)Redirection via typescript


 We use the naviage method.
 Naivagate works correctly even with relative paths.

 this.router.navigate(['servers']);

 The above will work correcty despite which component you are on.

 Router link would result to an error incase you match paths wrongly..
 Router link can detect on which url you are currently on
 
 (g)Redirecting Dynamically

  {path: 'users/:id', component: UserComponent},

  N/B Colon is very important

  
```

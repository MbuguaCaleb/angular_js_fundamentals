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
```

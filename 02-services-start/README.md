**What are Serives**

```
A class that acts as a central repository and which you may use to share data within your components.

It helps you avoid repeating the same code in both components.

```

**Gettting access to services**

```
We use dependency injector.

We do not instatiate it diectly as we we with normal classes.

steps(Import it , Include the Provider , initialize in my constructor then call
the method in service)

Services help us write DRY CODE.


```

**Hierachial Injector**

```
Servies work hierachically..

When i inject a service its automatically availed to all the childen of the compent
that i injected my sevice but not upwards.

The same instance of the service is available for the component and all its child
components.

N/B
We should not oveeride a service that was injected from parent to child another time by
calling it again its the childs provider.

This makes angular get confused since a service is automatically provided to all its children.


Bringing a service into a component is now what i call injection.(My understanding)

Services may:

 (a)Provide data across your components as well.

 (b)Help you have dry code.
```

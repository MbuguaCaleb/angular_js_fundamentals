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

The highest level we may add providers is the appmodule.ts then followed by the app.component.ts


N/B
We should not oveeride a service that was injected from parent to child another time by
calling it again its the childs provider.

This makes angular get confused since a service is automatically provided to all its children.

Bringing a service into a component is now what i call injection.(My understanding)

Services may:

 (a)Provide data across your components as well.

 (b)Help you have dry code.

```

**Injecting services into serivices**

```
We use the @Injectable Key word to the receiving service.

This is what allows the service to be injected to

Side Note

@Injectable ->is a metadata
@compoent ->is a metadata
@directive->is a metadata

Where we dont inject anything into a service we dont have to add @Injectable()
but its a good habit...especially in modern versions of angular

```

**Services for component communication**

```
I can also call an event emmitter from a service.

And when i call an event emitter from a service i can be able to
listen it across all of my components which is easier than at output.

Its helps me avoid a lot of nested Output especially if a component is very far away.

```

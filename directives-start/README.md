#Objectives

```
Learning how to build out own  custom directives

There are three types of directives in Angular Js:

(a)Components—directives with a template.

(b)Structural directives—change the DOM layout by adding and removing DOM elements.

(They affect the Whole area in the DOM.A good example in ngIf and ngFor)

(c)Attribute directives—change the appearance or behavior of an element, component, or another directive.(Only affect or change the element which they are added to)

N/B You cannot combine tow structural directives together.

```

```
1.Ng class assigns a style based on whether a condition is true or false.

The class must have already been defined in yoyr css file.

[ngClass]="{odd:onlyOdd}"

2.[Ngstyle]->i know

```

**Custom Directives**

```
1.It is best practice to use the renderer since there are instances that angular does not allow you
to access the DOM directly.

2."" (two colons are very important when executing logic in angular js)
  Examples:(a)  [ngClass]="{odd:even % 2 !== 0 }"
           (b)  [highlightColor]="'violet'"


Two edge cases

We know that our custom attribute directive names are not binded with [customName] as in Angular
core directives.This may however happen in a unique scenerio where the directve alias is the same
as the directive name..

BUT Note that this is only a unique case.

<p [appBetterHighlight]="'violet'" [defaultColor]="'red'">Style me with better directive</p>


If we pass down a string to a string @inpute() we may take a shortcut as shown
below..

<p [appBetterHighlight]="'violet'" defaultColor="red">Style me with better directive</p>


```

**Main Topics**

```
Remeber the Rendered and the HostBinder HostListener.

```

**Notes By**

```
Mbugua Caleb

```

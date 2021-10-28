**Observables**

```
Can be thought of initially as a data source.

Obaservables are constructs which i subscribe in order
to be informed about changes in data.


In an angular Project an Observable is an Object
we import from a third party package(rxjs)

An Observable can be triggerred from User Input,Events,
Http Request, or triggerred om code.

Critical also in Observable patter in an Observer.

In between the Observable and the Observer we have a
Stream(Timeline)

In between the Stream we have mutiple data packages in between emmitted
and thats what the Observable listens.

We have the Observable which emits data and we
have the Observer(For example your code when you
subscribe)

There are three types of data packages an Observable can receive:

(a)Handle Data

(b)Handle Error.

(c)Handle Completion.

Eg after making a HTTP Request.

Very Important.

We use Observables to Handle asychoronous task.

Its a different alternative for handling asynchronous tasks.

It is the reason why angular embraces observables.

```

**More Explanation**

```
Observables are constructs to which we Subsribe to be informed about changes
in data.

Observable is a stream of data.

Inbuilt Angular Observable

 //its a stream of Route Parameters
    //Subscribing informs us when a new data piece is emmited
    //That stream gives us a new parameter whenever the route changes
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });

The work of subsribe is to listen to changes in my stream

It is important to note that an Observable keeps on being executed until you
unsubscribe to it.

if we allow this to continue without unsubscribing, it leads to memory
leaks.

For the Observables provided by angular or any other inbuilt Observables,
angular Unsubsribes for you.


```

**Much More Custom Observable**

```

const customIntervalObservable = Observable.create((observer) => {
  let count = 0;
  setInterval(() => {
    observer.next(count);
    count++;
  }, 1000);
});

i cab call three methods

(a)observer.next()

(b)observer.error()

When ever an Observaable emits an error, It dies(It does not emit any other value)

Its just like catch in .then()

(c)observer.complete()

A good example of an Observable that completes is a Http Request

Whenever an Observable is complete, It is done, There are no other values emmited thereafter.

You do not need to unsubsribe to an Observable Once its complete..But its good practice just incase

When an error happens,It cancels the Observable and therefore the Observable does not Complete.

```

**Operators**

```
They are used to maiplutate/transform you data just before it reaches the Observer.

(They convert your data Just before subscribing to it)

We do this by calling the pipe method

It is used when you are fetching complex data but you want to transform it before you use
it.

N/B

It is important to note that the Pipe method can take more than One argument.

```

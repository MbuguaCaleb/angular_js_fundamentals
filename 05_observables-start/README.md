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

(c)observer.complete()

```

# Event Driven

### Question

```ts
class EventEmit {
  // write down here
}
```

```ts
// CASE
const eventEmit = new EventEmit(); // create event instance
const callback1 = (...args) => console.log("callback1", ...args); // subscribe event callback 1
const callback2 = (...args) => console.log("callback2", ...args); // subscribe event callback 2

const keyEvent = "event-123"; // key event 1
const sub1 = eventEmit.subscribe(keyEvent, callback1); // subscribe event 1
const sub2 = eventEmit.subscribe(keyEvent, callback2); // subscribe event 2

eventEmit.emit(keyEvent, "Hello", "World!"); // emit event 1
sub1.destroy(); // destroy sub1 callback
eventEmit.emit(keyEvent, "Hello 2", "World! 2"); // emit event 1 but only callback2 will be called
console.log(eventEmit.__events); // show all events

/* RESULT
callback1 Hello World!
callback2 Hello World!
callback2 Hello 2 World! 2
{ 'event-123': { dgj: [Function: callback2] } }
*/

```

### Explanation
this is live code question on one of the biggest sort video social media sharing, this task and need to finished with in 30 minutes countdown and coding in hackerrank interview.

### ROLE
> Senior Frontend Engineer Singapore

### TEST

```bash

 √ case.test.ts (2)
   √ EventEmit (2)
     √ should subscribe to an event and emit it
     √ should throw an error when emitting an unknown event

Test Files  1 passed (1)
     Tests  2 passed (2)
      Time  536ms (in thread 3ms, 17879.85%)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |                   
 index.ts |     100 |      100 |     100 |     100 |                   
----------|---------|----------|---------|---------|-------------------
✨  Done
```

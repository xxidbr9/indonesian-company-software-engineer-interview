// event emitter
export class EventEmit {
  public __events: { [event: string]: { [key: string]: Function } };

  constructor() {
    this.__events = {};
  }

  // for create subscribe event
  subscribe(event: string, callback: Function) {
    const keyEvent = Math.random().toString(36).slice(2, 5); // random key

    // create event if not exist
    this.__events[event] = {
      ...this.__events[event],
      [keyEvent]: callback
    };

    // return function for destroy event
    return { destroy: () => this.destroy(event, keyEvent) };
  }

  // for run or emit the event with given key
  emit(event: string, ...args: any[]) {
    const __event = this.__events[event];
    if (!__event) throw new Error(`Event "${event}" not found`);

    const funcEvents = Object.values(__event);
    if (!!funcEvents) funcEvents.forEach(func => func(...args));
  }

  // private method for destroy event
  private destroy(event: string, keyEvent: string) {
    delete this.__events[event][keyEvent];
  }
}


// const eventEmit = new EventEmit(); // create event instance
// const callback1 = (...args) => console.log("callback1", ...args); // subscribe event callback 1
// const callback2 = (...args) => console.log("callback2", ...args); // subscribe event callback 2

// const keyEvent = "event-123"; // key event 1
// const sub1 = eventEmit.subscribe(keyEvent, callback1); // subscribe event 1
// const sub2 = eventEmit.subscribe(keyEvent, callback2); // subscribe event 2

// eventEmit.emit(keyEvent, "Hello", "World!"); // emit event 1
// sub1.destroy(); // destroy sub1 callback
// eventEmit.emit(keyEvent, "Hello 2", "World! 2"); // emit event 1 but only callback2 will be called

// console.log(eventEmit.__events); // show all events
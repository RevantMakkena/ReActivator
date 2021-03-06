export class Store {
  constructor(dispatcher) {
    debugger;
    this.__listeners = [];
    this.__state = this.getInitialState();
    dispatcher.register(this.__onDispatch.bind(this));
  }

  __onDispatch() {
    throw new Error("Must override by sub-class");
  }

  getInitialState() {
    throw new Error("Must override by sub-class");
  }

  addListener(listener) {
    this.__listeners.push(listener);
  }

  __emitChange() {
    this.__listeners.forEach((listener) => listener(this.__state));
  }
}

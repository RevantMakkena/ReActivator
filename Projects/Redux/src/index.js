import configureStore from "./store/configureStore";
import * as actions from "./store/bugs";

const store = configureStore();

store.subscribe(() =>
  console.log("Store called " + JSON.stringify(store.getState()))
);

store.dispatch(actions.bugAdded("Hello"));
store.dispatch(actions.bugAdded("Hi"));
store.dispatch(actions.bugAdded("Hyee"));

import configureStore from "./store/configureStore";
import * as actions from "./store/bugs";

const store = configureStore();

store.subscribe(() =>
  console.log("Store called " + JSON.stringify(store.getState()))
);

store.dispatch(actions.bugAdded({description: "Hello"}));
store.dispatch(actions.bugAdded({description: "Hi"}));
store.dispatch(actions.bugAdded({description: "Hyee"}));

import configureStore from "./store/configureStore";
import {bugAdded, bugResolved} from "./store/bugs";
import {projectAdded} from "./store/projects";

const store = configureStore();

store.subscribe(() =>
  console.log("Store called " + JSON.stringify(store.getState()))
);

store.dispatch(projectAdded({description: "Nenu"}));
store.dispatch(bugAdded({description: "Hello"}));

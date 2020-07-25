import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugResolved,
  getUnresolvedBugs,
  addBugToUser,
  getBugsByUser,
  loadBugs,
  addBug,
} from "./store/slices/bugs";
import {projectAdded} from "./store/slices/projects";
import {addUser} from "./store/slices/users";
import * as ApiActions from "./store/actions/apiAction";

const store = configureStore();

// store.subscribe(() =>
//   console.log("Store called " + JSON.stringify(store.getState()))
// );

// store.dispatch(projectAdded({description: "Ne nu"}));
// store.dispatch(bugAdded({description: "Hello"}));
// store.dispatch(addUser({name: "Revanth"}));
// store.dispatch({type: "error", description: {message: "Hello"}});
// store.dispatch(addUser({name: "Makkena"}));
// store.dispatch(addUser({name: "Kumar"}));
// store.dispatch(addBugToUser({bugId: 1, userId: 1}));

// console.log(getBugsByUser(1)(store.getState()));

// store.dispatch((dispatch, getState) => {
//   //Call API
//   dispatch(bugAdded({description: "in-flight added"}));
// });

store.dispatch(addBug({description: "xyz"}));

// setTimeout(() => {
//   store.dispatch(loadBugs());
// }, 2000);

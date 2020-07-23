import {combineReducers} from "redux";
import bugReducer from "./slices/bugs";
import projectReducer from "./slices/projects";
import userReducer from "./slices/users";

export default combineReducers({
  bugs: bugReducer,
  projects: projectReducer,
  users: userReducer,
});

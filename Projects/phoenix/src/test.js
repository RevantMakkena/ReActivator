import configureStore from "./store/ConfigureStore";
import {loadEmployees} from "./store/slices/EmployeeSlice";
const store = configureStore();
store.dispatch(loadEmployees());

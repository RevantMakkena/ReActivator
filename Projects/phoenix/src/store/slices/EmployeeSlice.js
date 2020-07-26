import {createSlice} from "@reduxjs/toolkit";
import * as UrlActions from "../../config/keys";
import {
  API_CALL_BEGAN,
  API_CALL_SUCCESS,
  API_CALL_FAILED,
} from "../actions/ApiActions";

const employees = createSlice({
  name: "emps",
  initialState: {list: [], loading: false},
  reducers: {
    getEmployees: (emps, action) => {},
    getEmployee: (emps, action) => {},
    editEmployee: (emps, action) => {},
    addEmployee: (emps, action) => {},
    deleteEmployee: (emps, action) => {},
    empsRequested: (emps, action) => {
      emps.loading = true;
    },
    empsRequestFailed: (emps, action) => {
      emps.loading = false;
    },
    empsReceived: (emps, action) => {
      emps.list = action.payload;
      emps.loading = false;
    },
  },
});

const {
  empsRequested,
  empsRequestFailed,
  empsReceived,
} = employees.actions;
export default employees.reducer;

//Action Creators
export const loadEmployees = () => (dispatch, getState) => {
  dispatch(
    API_CALL_BEGAN({
      url: UrlActions.employeesAPI,
      method: "get",
      onStart: empsRequested.type,
      onSuccess: empsReceived.type,
      onError: empsRequestFailed.type,
    })
  );
};

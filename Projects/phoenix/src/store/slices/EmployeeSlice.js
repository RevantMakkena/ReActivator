import {createSlice} from "@reduxjs/toolkit";

const employees = createSlice({
  name: "emps",
  initialState: [],
  reducers: {
    getEmployees: (emps, action) => {},
    getEmployee: (emps, action) => {},
    editEmployee: (emps, action) => {},
    addEmployee: (emps, action) => {},
    deleteEmployee: (emps, action) => {},
  },
});

export default employees.reducer;

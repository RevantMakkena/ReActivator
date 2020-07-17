import {createSlice} from "@reduxjs/toolkit";

let lastId = 0;
const bugSlice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (bugs, action) => {
      const index = bugs.findIndex((f) => f.id === action.payload.id);
      state[index].resolved = true;
    },
  },
});

export const {bugAdded, bugResolved} = bugSlice.actions;
export default bugSlice.reducer;

import {createSlice} from "@reduxjs/toolkit";
import {createSelector} from "reselect";

let lastId = 0;
const bugSlice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    addBugToUser: (bugs, action) => {
      const {bugId, userId} = action.payload;
      const index = bugs.findIndex((bug) => bug.id === bugId);
      bugs[index].userId = userId;
    },
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

export const {bugAdded, bugResolved, addBugToUser} = bugSlice.actions;
export default bugSlice.reducer;

export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (bugs) => bugs.filter((bug) => !bug.resolved)
);

export const getBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );

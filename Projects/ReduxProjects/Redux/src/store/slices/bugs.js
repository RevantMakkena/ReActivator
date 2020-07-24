import {createSlice} from "@reduxjs/toolkit";
import {createSelector} from "reselect";
import {API_CALL_BEGAN, API_CALL_FAILED} from "../actions/apiAction";
import moment from "moment";

let lastId = 0;
const bugSlice = createSlice({
  name: "bugs",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    addBugToUser: (bugs, action) => {
      const {bugId, userId} = action.payload;
      const index = bugs.list.findIndex((bug) => bug.id === bugId);
      bugs.list[index].userId = userId;
    },
    bugAdded: (bugs, action) => {
      bugs.list.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (bugs, action) => {
      const index = bugs.list.findIndex(
        (f) => f.id === action.payload.id
      );
      bugs.list[index].resolved = true;
    },
    bugsReceived: (bugs, action) => {
      bugs.list = action.payload;
      bugs.loading = false;
      bugs.lastFetch = Date.now();
    },
    bugsRequested: (bugs, action) => {
      bugs.loading = true;
    },
    bugsRequestFailed: (bugs, action) => {
      bugs.loading = false;
    },
  },
});

export const {
  bugAdded,
  bugResolved,
  addBugToUser,
  bugsReceived,
  bugsRequested,
  bugsRequestFailed,
} = bugSlice.actions;
export default bugSlice.reducer;

//Action Creators
export const loadBugs = () => (dispatch, getState) => {
  const {lastFetch} = getState().entities.bugs;
  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");

  if (diffInMinutes < 10) return;

  dispatch(
    API_CALL_BEGAN({
      url: "/bugs",
      method: "get",
      data: {},
      onStart: bugsRequested.type,
      onSuccess: bugsReceived.type,
      onError: bugsRequestFailed.type,
    })
  );
};

//Memoization
export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (bugs) => bugs.list.filter((bug) => !bug.resolved)
);

export const getBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.list.filter((bug) => bug.userId === userId)
  );

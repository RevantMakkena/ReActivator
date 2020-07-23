import {createSlice} from "@reduxjs/toolkit";
let id = 0;

const projectSlice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    projectAdded: (projects, action) => {
      projects.push({
        id: ++id,
        description: action.payload.description,
      });
    },
  },
});

export const {projectAdded} = projectSlice.actions;
export default projectSlice.reducer;

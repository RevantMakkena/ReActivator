import {createSlice} from "@reduxjs/toolkit";

const loginUser = createSlice({
  name: "logUser",
  initialState: {user: {}, token: "", loggedIn: false},
  reducers: {
    loginUser: (user, action) => {},
    logoutUser: (user, action) => {},
  },
});

export default loginUser.reducer;

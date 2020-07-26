import React from "react";
import "./App.css";
import {TopBar} from "../shared/topbar/TopBar";
import {useStore, useSelector, useDispatch} from "react-redux";
import {loginUserAction} from "../../store/slices/LoginSlice";

const App = () => {
  // const store = useStore();
  // console.log(store.getState());

  // const user = useSelector((state) => state.loginUser.currentUser);
  // console.log("user" + JSON.stringify(user));

  const disp = useDispatch();
  disp(loginUserAction());

  return (
    <>
      <TopBar />
    </>
  );
};
export default App;

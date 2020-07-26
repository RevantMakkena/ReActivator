import React from "react";
import "./App.css";
import {TopBar} from "../shared/topbar/TopBar";
import Login from "../login/login";
import {Register} from "../register/register";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {Home} from "../home/home";
import {logoutUserAction} from "../../store/slices/LoginSlice";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.loginUser.currentUser);

  const logUserOut = () => {
    dispatch(logoutUserAction());
  };

  return (
    <>
      <TopBar user={user} logout={logUserOut} />
      {user.name ? (
        <Home />
      ) : (
        <BrowserRouter>
          <Link to='/login'>Login</Link>
          {" | "}
          <Link to='/register'>Register</Link>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
          </Switch>
        </BrowserRouter>
      )}
    </>
  );
};
export default App;

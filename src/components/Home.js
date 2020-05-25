import React from "react";
import {Switch, Route} from "react-router-dom";
import User from "./User/User";
import UserDetails from "./User/UserDetails";
import Navigator from "./common/Navigator";

export default function Home() {
  return (
    <>
      <Navigator />
      <Switch>
        <Route path="/" exact component={User} />
        <Route path="/edit" component={UserDetails} />
        <Route component={User} />
      </Switch>
    </>
  );
}

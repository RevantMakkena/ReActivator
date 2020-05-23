import React from "react";
import {Switch, Route} from "react-router-dom";
import User from "./User";
import ModifyUser from "./ModifyUser";
import Navigator from "./common/Navigator";

export default function Home() {
  return (
    <>
      <Navigator />
      <Switch>
        <Route path="/" exact component={User} />
        <Route path="/edit" component={ModifyUser} />
        <Route component={User} />
      </Switch>
    </>
  );
}

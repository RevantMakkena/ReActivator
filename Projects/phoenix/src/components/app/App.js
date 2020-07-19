import React from "react";
import "./App.css";
import {TopBar} from "../shared/topbar/TopBar";
import {SideNavigation} from "../shared/sidenav/SideNavigation";

function App() {
  return (
    <>
      <TopBar />
      <SideNavigation />
    </>
  );
}

export default App;

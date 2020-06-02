import React from "react";
import AutoRunningTimer from "./components/AutoRunningTimer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddCustomTimer from "./components/AddCustomTimer";

function App() {
  return (
    <div className='App'>
      {/* <AutoRunningTimer /> */}
      <AddCustomTimer />
    </div>
  );
}

export default App;

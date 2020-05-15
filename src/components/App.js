import React from "react";
import About from "./AboutPage";
import Home from "./HomePage";
import Header from "./common/Header";

function App() {
  function getPage() {
    const route = window.location.pathname;
    if (route === "/about") return <About />;
    return <Home />;
  }
  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
}

export default App;

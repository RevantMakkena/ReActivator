import React from "react";
import "./App.css";
import Form from "./form";
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import UseFormHookEx from "./UseFormHookExample";
import {Container} from "@material-ui/core";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Link to='/'>Home</Link> {" | "}
        <Link to='/ComplicatedForm'>Form</Link> {" | "}
        <Link to='/SimplifiedForm'>Simplified Form</Link>
        <Switch>
          <Route
            path='/SimplifiedForm'
            component={UseFormHookEx}></Route>
          <Route path='/ComplicatedForm' component={Form}></Route>
          <Route path='/' component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const Home = () => {
  return (
    <>
      <Container maxWidth='sm' style={{marginTop: "100px"}}>
        <i
          className='fas fa-address-card'
          style={{fontSize: "350px", color: "olive"}}></i>
      </Container>
    </>
  );
};

export default App;

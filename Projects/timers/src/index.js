import React from "../node_modules/@types/react";
import ReactDOM from "../node_modules/@types/react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import Routing from "./Routing";

ReactDOM.render(<Routing />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

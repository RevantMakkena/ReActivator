import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/App";
import {Provider} from "react-redux";
import ConfigureStore from "./store/ConfigureStore";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const store = ConfigureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

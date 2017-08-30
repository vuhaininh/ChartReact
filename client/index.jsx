import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.less";
import Dashboard from "./Dashboard";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Dashboard />
  </Provider>,
  document.getElementById("app")
);

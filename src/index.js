import React from "react";
import ReactDOM from "react-dom";
// The following import is to be able to use Bootstrap styling in the app
import "bootstrap/dist/css/bootstrap.min.css";
// The following three imports are required to use Bootstrap JS in the app.
// Bootstrap JS functionality includes the navbar button toggling in small screen sizes (see NavBar.js)
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

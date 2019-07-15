import thunk from "redux-thunk";
import logger from "./logger";
import { applyMiddleware, compose } from "redux";

// Expose the app store into the Chrome Redux Devtools extension ONLY IF the app is running locally/in development AND the extension is enabled
const middleware = [
  applyMiddleware(thunk, logger),
  ...((window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1") &&
    window.__REDUX_DEVTOOLS_EXTENSION__
    ? [window.__REDUX_DEVTOOLS_EXTENSION__()]
    : [])
];
export default compose(...middleware);

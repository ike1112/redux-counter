/**
 * src/index.js
 */

import { StrictMode } from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

//the whole application listen for the state changes
store.subscribe(() => {
  ReactDOM.render(<App />, rootElement);
});

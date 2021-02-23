/**
 * src/index.js
 */

import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);

//the whole application listen for the state changes
// store.subscribe(() => {
//   ReactDOM.render(<App />, rootElement);
// });

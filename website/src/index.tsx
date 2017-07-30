import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import {render} from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import { RootReducer } from "./Reducers/RootReducer";

const store = createStore(RootReducer);

render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById("root") as HTMLElement,
);

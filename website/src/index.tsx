import "bootstrap/dist/css/bootstrap.min.css";
import { Set } from "immutable";
import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { SetOrganizations } from "./Actions";
import { App } from "./App";
import { LoadOrganizations } from "./DataLoader";
import { RootReducer } from "./Reducers/RootReducer";
import { County } from "./State/County";
import { Gender } from "./State/Gender";
import { Organization } from "./State/Organization";
import { ServiceCategory } from "./State/ServiceCategory";
import { SiteState } from "./State/SiteState";

const store = createStore(
  RootReducer,
  new SiteState(
    Set.of<County>(),
    Set.of<ServiceCategory>(),
    Set.of<Gender>(),
    Set.of<County>(),
    Set.of<ServiceCategory>(),
    Set.of<Gender>(),
    false,
    Set.of<Organization>(),
  ),
);

LoadOrganizations().then((organizations) => {
  store.dispatch(SetOrganizations(organizations));
});

render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById("root") as HTMLElement,
);

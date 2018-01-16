import "bootstrap/dist/css/bootstrap.min.css";
import { labeledCols } from "get-sheet-done";
import { Set } from "immutable";
import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { SetOrganizationsFromSheet } from "./Actions";
import { App } from "./App";
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

labeledCols("1gpjwC1vubszHZD0z6-Pzxpt1-4Yde2wJ4cStYi3nnFY", 1).then((sheet: any) =>
{
  store.dispatch(SetOrganizationsFromSheet(sheet));
});

render(
  (
    <Provider store={store}>
      <App/>
    </Provider>
  ),
  document.getElementById("root") as HTMLElement,
);

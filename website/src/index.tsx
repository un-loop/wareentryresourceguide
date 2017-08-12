import "bootstrap/dist/css/bootstrap.min.css";
import { Set } from "immutable";
import * as React from "react";
import {render} from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import { RootReducer } from "./Reducers/RootReducer";
import { County } from "./State/County";
import { GenderOption } from "./State/GenderOption";
import { Organization } from "./State/Organization";
import { ServiceCategory } from "./State/ServiceCategory";
import { SiteState } from "./State/SiteState";

const store = createStore(
  RootReducer,
  new SiteState(
    Set<Organization>(
      new Array<Organization>(
        new Organization(
          "A",
          new Array<County>(County.Benton, County.Chelan),
          "B",
          "C",
          "D",
          "E",
          "F",
          new Array<ServiceCategory>(ServiceCategory.Education),
          true,
          true,
          true)),
      ),
    GenderOption.PreferNotToSay,
    Set<ServiceCategory>(new Array<ServiceCategory>(ServiceCategory.Education)),
    false,
    Set<County>(new Array<County>(County.Benton, County.Clark))));

render(
  (
    <Provider store={store}>
      <App/>
    </Provider>
  ),
  document.getElementById("root") as HTMLElement,
);

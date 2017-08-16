import "bootstrap/dist/css/bootstrap.min.css";
import { Set } from "immutable";
import * as React from "react";
import {render} from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { App } from "./App";
import { RootReducer } from "./Reducers/RootReducer";
import { County } from "./State/County";
import { GenderOption } from "./State/GenderOption";
import { Organization } from "./State/Organization";
import { ServiceCategory } from "./State/ServiceCategory";
import { SiteState } from "./State/SiteState";

const store = createStore(
  RootReducer,
  new SiteState(
    Set.of<Organization>(
        new Organization(
          "A",
          Set.of<County>(County.Benton, County.Chelan),
          "B",
          "C",
          "D",
          "E",
          "F",
          Set.of<ServiceCategory>(ServiceCategory.Education),
          true,
          true,
          true),
      ),
    GenderOption.PreferNotToSay,
    Set.of<ServiceCategory>(ServiceCategory.Education),
    false,
    Set.of<County>(County.Benton, County.Clark),
    Set.of<County>(County.Benton, County.Clark),
    Set.of<ServiceCategory>(ServiceCategory.Education, ServiceCategory.Health)));

render(
  (
    <Provider store={store}>
      <App/>
    </Provider>
  ),
  document.getElementById("root") as HTMLElement,
);

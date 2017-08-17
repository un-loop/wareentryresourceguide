import "bootstrap/dist/css/bootstrap.min.css";
import { Set } from "immutable";
import * as React from "react";
import {render} from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
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
    Set.of<County>(County.Benton, County.Clark),
    Set.of<ServiceCategory>(ServiceCategory.Education, ServiceCategory.Health),
    Set.of<Gender>(Gender.Male, Gender.Female),
    Set.of<County>(),
    Set.of<ServiceCategory>(),
    Set.of<Gender>(),
    false,
    Set.of<Organization>(
      new Organization(
        "Organization Name",
        "1234 N. Street Ave, City ST 12345",
        "(555) 123-4567",
        "www.website.com",
        "email@domain.com",
        "This is a fake organization",
        Set.of<County>(County.Benton, County.Chelan),
        Set.of<ServiceCategory>(ServiceCategory.Education),
        Set.of<Gender>(Gender.Male),
        true),
    ),
  ),
);

render(
  (
    <Provider store={store}>
      <App/>
    </Provider>
  ),
  document.getElementById("root") as HTMLElement,
);

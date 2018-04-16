import "bootstrap/dist/css/bootstrap.min.css";
import { Set } from "immutable";
import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { SetOrganizations} from "./Actions";
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

function loadJson<T>(url: string): Promise<T>
{
  return fetch(url)
    .then((response) =>
    {
      if (!response.ok)
      {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<T>;
    });
}

function parseOrganization(data: any): Organization
{
  return {
    ...data,
    countiesServed: Set(data.countiesServed),
    servicesCategories: Set(data.servicesCategories),
  };
}

export function LoadOrganizations(): Promise<Set<Organization>>
{
  return loadJson<any[]>("./data.json").then((data) =>
  {
    return Set<Organization>(data.map(parseOrganization));
  });
}

LoadOrganizations().then((organizations) =>
{
  store.dispatch(SetOrganizations(organizations));
});

render(
  (
    <Provider store={store}>
      <App/>
    </Provider>
  ),
  document.getElementById("root") as HTMLElement,
);

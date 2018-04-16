import { Set } from "immutable";
import { Organization } from "./State/Organization";

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

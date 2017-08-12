import { Set } from "immutable";
import { Organization } from "./State/Organization";

export class OrganizationListProps {
  constructor(public readonly organizations: Set<Organization>)
  {
  }
}

import {Set} from "immutable";
import * as React from "react";
import { ListGroup } from "react-bootstrap";
import { Organization } from "../State/Organization";
import { OrganizationListItem } from "./OrganizationListItem";

export interface IOrganizationListProps {
  organizations: Set<Organization>;
}

export class OrganizationList extends React.Component<IOrganizationListProps, {}> {
  public render()
  {
    const listItems = this.props.organizations.map(
      (organization: Organization) => <OrganizationListItem organization={organization as Organization}/>,
    );

    return (
      <div>
        <h2>Organizations</h2>
        <ListGroup>
          {listItems}
        </ListGroup>
      </div>
    );
  }
}

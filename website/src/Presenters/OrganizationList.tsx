import {Set} from "immutable";
import * as React from "react";
import { ListGroup, Panel } from "react-bootstrap";
import { Organization } from "../State/Organization";
import { OrganizationListItem } from "./OrganizationListItem";

export interface IOrganizationListProps {
  organizations: Set<Organization>;
}

export class OrganizationList extends React.Component<IOrganizationListProps, {}> {
  public render()
  {
    const listItems = this.props.organizations.map(
      (organization: Organization) =>
      (
        <OrganizationListItem
          organization={organization as Organization}
          key={organization.name}
        />
      ),
    );

    return (
      <Panel header={<h3>Found these services:</h3>}>
        <ListGroup fill={true}>
          {listItems}
        </ListGroup>
      </Panel>
    );
  }
}

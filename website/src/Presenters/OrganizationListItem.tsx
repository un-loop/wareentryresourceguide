import * as React from "react";
import { ListGroupItem } from "react-bootstrap";
import { Organization } from "../State/Organization";

interface IOrganizationListItemProps
{
  organization: Organization;
}

export class OrganizationListItem extends React.Component<IOrganizationListItemProps, {}>
{
  public render()
  {
    return (
        <ListGroupItem>
          <h2>{this.props.organization.name} </h2>
          <h3>{this.props.organization.description}</h3>
          <p>Email: {this.props.organization.email}</p>
          <p>Phone: {this.props.organization.phone}</p>
          <p>Address: {this.props.organization.address}</p>
        </ListGroupItem>
    );
  }
}

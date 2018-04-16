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
    let email, phone, address;
    if (this.props.organization.email)
    {
      email = <p>Email: <a href="mailto:{this.props.organization.email}">{this.props.organization.email}</a></p>;
    }
    if (this.props.organization.phone)
    {
      phone = <p>Phone: <a href="tel:{this.props.organization.phone}">{this.props.organization.phone}</a></p>;
    }
    if (this.props.organization.email)
    {
      address = <p>Address: {this.props.organization.address}</p>;
    }
    return (
        <ListGroupItem>
          <h3>{this.props.organization.name}</h3>
          <p>{this.props.organization.description}</p>
          {email}
          {phone}
          {address}
        </ListGroupItem>
    );
  }
}

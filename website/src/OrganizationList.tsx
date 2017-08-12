import * as React from "react";
import { ListGroup } from "react-bootstrap";
import OrganizationListItem from "./OrganizationListItem";
import {OrganizationListProps} from "./OrganizationListProps";
import { Organization } from "./State/Organization";

export class OrganizationList extends React.Component<OrganizationListProps, {}> {
  public render()
  {
    return (
      <div>
        <h2>Organizations</h2>
        <ListGroup>
{this.props.organizations.map((organization) => <OrganizationListItem organization={organization as Organization}/>)}
        </ListGroup>
      </div>
    );
  }
}

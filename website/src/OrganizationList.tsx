import * as React from "react";
import { ListGroup } from "react-bootstrap";
import Organization from "./Organization";
import OrganizationListItem from "./OrganizationListItem";

interface IOrganizationListProps {
  organizations: Organization[];
}

export default class OrganizationList extends React.Component<IOrganizationListProps, {}> {
  public render() {
    return (
      <div>
        <h2>Organizations</h2>
        <ListGroup>
            {this.props.organizations.map((organization) => <OrganizationListItem organization={organization}/>)}
        </ListGroup>
      </div>
    );
  }
}

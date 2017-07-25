import * as React from "react";
import { Col, Grid, Row } from "react-bootstrap";
import CountyFilter from "./CountyFilter";
import GenderFilterSelect from "./GenderFilterSelect";
import Organization from "./Organization";
import OrganizationList from "./OrganizationList";
import ServiceFilterSelect from "./ServiceFilterSelect";

interface IFilterableOrganizationList {
    organizations: Organization[];
}

interface IFilterableOrganizationState {
    genderSelection: Gender;
}

enum Gender {
    Male,
    Female,
}

export default class App extends React.Component<IFilterableOrganizationList, IFilterableOrganizationState> {
  public render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col sm={12} md={2}>
              <CountyFilter/>
            </Col>
            <Col sm={12} md={5}>
              <GenderFilterSelect/>
            </Col>
            <Col sm={12} md={5}>
              <ServiceFilterSelect/>
            </Col>
          </Row>
          <Row>
            <Col>
              <OrganizationList organizations={this.props.organizations}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

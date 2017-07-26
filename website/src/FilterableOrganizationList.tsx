import * as React from "react";
import { Col, Grid, Row } from "react-bootstrap";
import CountyFilter from "./CountyFilter";
import {Gender} from "./Gender";
import GenderFilterSelect from "./GenderFilterSelect";
import Organization from "./Organization";
import OrganizationList from "./OrganizationList";
import ServiceFilterSelect from "./ServiceFilterSelect";

interface IFilterableOrganizationList {
    organizations: Organization[];
}

interface IFilterableOrganizationState {
    genderSelection: Gender;
    selectedCounties: string[];
}

export default class App extends React.Component<IFilterableOrganizationList, IFilterableOrganizationState> {
  private counties: string[] = new Array<string>("Benton", "King");

  public constructor(props: IFilterableOrganizationList, state: IFilterableOrganizationState ) {
    super(props, state);
    this.state = {genderSelection: Gender.Male, selectedCounties: new Array<string>()};
    this.handleCountiesFilterChange = this.handleCountiesFilterChange.bind(this);
    this.handleGenderFilterChange = this.handleGenderFilterChange.bind(this);
  }

  public render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col sm={12} md={2}>
              <CountyFilter
                onChange={this.handleCountiesFilterChange}
                counties={this.counties}
                selectedCounties={this.state.selectedCounties}
              />
            </Col>
            <Col sm={12} md={5}>
              <GenderFilterSelect
                onChange={this.handleGenderFilterChange}
                gender={this.state.genderSelection}
              />
            </Col>
            <Col sm={12} md={5}>
              <ServiceFilterSelect/>
            </Col>
          </Row>
          <Row>
            <Col>
              <OrganizationList organizations={this.getFilteredOrganizations()}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

  private getFilteredOrganizations(): Organization[] {
    return this.props.organizations.filter(
      (organization) => !this.shouldBeFilteredByCounty(organization) && !this.shouldBeFilteredByGender(organization));
  }

  private shouldBeFilteredByCounty(organization: Organization): boolean {
    return this.state.selectedCounties.some(() => true) &&
    !organization.countiesServed
      .some((countyServed) => this.state.selectedCounties
      .some((selectedCounty) => selectedCounty === countyServed));
  }

  private shouldBeFilteredByGender(organization: Organization): boolean {
    if (this.state.genderSelection === Gender.Male) {
      return organization.servesMale === false;
    }
    if (this.state.genderSelection === Gender.Female) {
      return organization.servesFemale === false;
    }
    return false;
  }

  private handleCountiesFilterChange(selectedCounties: string[]) {
    this.setState({ selectedCounties });
  }

  private handleGenderFilterChange(genderSelection: Gender) {
    this.setState({ genderSelection });
  }
}

import * as React from "react";
import { Col, Grid, Row } from "react-bootstrap";
import FilterableOrganizationList from "./FilterableOrganizationList";
import Organization from "./Organization";

const organizations = new Array<Organization>(
  new Organization(
    "My cool King county organization",
    new Array<string>("King"),
    "1234 Fake Address St, Seattle WA, 98103",
    "(555) 555-1234",
    "www.fakewebsite.com",
    "fakeemail@fake.com",
    "A fake organization.",
    new Array<string>("Fake stuff."),
  ),
  new Organization(
    "My cool Benton county organization",
    new Array<string>("Benton"),
    "1234 Fake Address St, Seattle WA, 98103",
    "(555) 555-1234",
    "www.fakewebsite.com",
    "fakeemail@fake.com",
    "A fake organization.",
    new Array<string>("Fake stuff."),
  ),
  new Organization(
    "My male only cool organization",
    new Array<string>("King", "Benton"),
    "1234 Fake Address St, Seattle WA, 98103",
    "(555) 555-1234",
    "www.fakewebsite.com",
    "fakeemail@fake.com",
    "A fake organization.",
    new Array<string>("Real stuff."),
    true,
    false,
  ),
  new Organization(
    "My female only cool organization",
    new Array<string>("King", "Benton"),
    "1234 Fake Address St, Seattle WA, 98103",
    "(555) 555-1234",
    "www.fakewebsite.com",
    "fakeemail@fake.com",
    "A fake organization.",
    new Array<string>("Fake stuff."),
    false,
    true,
  ),
  new Organization(
    "My cool organization",
    new Array<string>("King", "Benton"),
    "1234 Fake Address St, Seattle WA, 98103",
    "(555) 555-1234",
    "www.fakewebsite.com",
    "fakeemail@fake.com",
    "A fake organization.",
    new Array<string>("Fake stuff."),
  ),
);

export default class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col sm={12} md={12}>
              <h1>Washington Re-entry Connect</h1>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={12}>
              <FilterableOrganizationList organizations={organizations}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
